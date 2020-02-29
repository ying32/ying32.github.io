package markdown

import (
	"sync"

	"github.com/dop251/goja"
)

var (
	markdownToHTML func(str string, opts map[string]interface{}) string
	sRW            sync.RWMutex
)

//highlight: function (code, lang) {
//return hljs.highlightAuto(code).value;
//}

func initMarkdownJsVM() error {
	vm := goja.New()

	// 伪造一个window对象
	vm.Set("window", vm.GlobalObject())

	_, err := vm.RunScript("highlight.js", string(highlightJsBytes))
	if err != nil {
		return err
	}
	_, err = vm.RunScript("marked.js", string(markedJsBytes))
	if err != nil {
		return err
	}

	marked := vm.ToValue(vm.Get("marked").Export())
	var markedCall goja.Callable
	if err = vm.ExportTo(marked, &markedCall); err != nil {
		return err
	}

	hljs := vm.Get("hljs")
	var highlightAutoCall goja.Callable
	if err := vm.ExportTo(hljs.ToObject(vm).Get("highlightAuto"), &highlightAutoCall); err != nil {
		return err
	}

	// 代码高亮的
	// function (code, lang)
	hljsHighlight := func(args goja.FunctionCall) goja.Value {
		result, err := highlightAutoCall(hljs, args.Arguments[0])
		if err == nil {
			return result.ToObject(vm).Get("value")
		}
		return goja.Null()
	}

	markdownToHTML = func(str string, opts map[string]interface{}) string {
		sRW.Lock()
		defer sRW.Unlock()
		if opts != nil {
			// 如果选项中有高亮的，就替换掉
			if _, ok := opts["highlight"]; ok {
				opts["highlight"] = hljsHighlight
			}
		}
		v, err := markedCall(marked, vm.ToValue(str), vm.ToValue(opts))
		if err != nil {
			return ""
		}
		return v.String()
	}

	return nil
}

func CovToHTML(str string, opts map[string]interface{}) string {
	if markdownToHTML == nil {
		return ""
	}
	if opts == nil {
		// {gfm: true, breaks: true, tables:true}
		opts = map[string]interface{}{"gfm": true, "breaks": true, "tables": true}
	}
	return markdownToHTML(str, opts)
}

func init() {
	if err := initMarkdownJsVM(); err != nil {
		panic(err)
	}
}
