package markdown

import (
	"sync"

	"github.com/dop251/goja"
)

var (
	markObj = NewMarkdown()
)

var (
	// 要执行的js文件
	jsFiles = []struct {
		Name string
		Data string
	}{
		{"highlight.js", string(highlightJsBytes)},
		{"marked.js", string(markedJsBytes)},
	}
)

type Markdown struct {
	vm            *goja.Runtime
	markedObj     goja.Value
	marked        goja.Callable
	hljsObj       goja.Value
	highlightAuto goja.Callable
	sRW           sync.RWMutex
}

func NewMarkdown() *Markdown {
	m := new(Markdown)
	m.vm = goja.New()
	// 伪造一个window对象
	m.vm.Set("window", m.vm.GlobalObject())
	if err := m.initScript(); err != nil {
		panic(err)
	}
	// marked
	m.markedObj = m.vm.ToValue(m.vm.Get("marked").Export())
	if err := m.vm.ExportTo(m.markedObj, &m.marked); err != nil {
		panic(err)
	}

	// hljs
	m.hljsObj = m.vm.Get("hljs")
	if err := m.vm.ExportTo(m.hljsObj.ToObject(m.vm).Get("highlightAuto"), &m.highlightAuto); err != nil {
		panic(err)
	}

	return m
}

func (m *Markdown) initScript() error {
	for _, item := range jsFiles {
		_, err := m.vm.RunScript(item.Name, item.Data)
		if err != nil {
			return err
		}
	}
	return nil
}

func (m *Markdown) hljsHighlight(args goja.FunctionCall) goja.Value {
	result, err := m.highlightAuto(m.hljsObj, args.Arguments[0])
	if err == nil {
		return result.ToObject(m.vm).Get("value")
	}
	return goja.Null()
}

func (m *Markdown) covToHTML(str string, opts map[string]interface{}) string {
	m.sRW.Lock()
	defer m.sRW.Unlock()
	if opts != nil {
		// 如果选项中有高亮的，就替换掉
		if _, ok := opts["highlight"]; ok {
			opts["highlight"] = m.hljsHighlight
		}
	}
	v, err := m.marked(m.markedObj, m.vm.ToValue(str), m.vm.ToValue(opts))
	if err != nil {
		return ""
	}
	return v.String()
}

func CovToHTML(str string, opts map[string]interface{}) string {
	if opts == nil {
		opts = map[string]interface{}{"gfm": true, "breaks": true, "tables": true}
	}
	return markObj.covToHTML(str, opts)
}
