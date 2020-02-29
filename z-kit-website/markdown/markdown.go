package markdown

import (
	"sync"

	"github.com/dop251/goja"
)

var (
	markdownToHTML func(str string, opts map[string]interface{}) string
	sRW            sync.RWMutex
)

func initMarkdownJsVM() error {
	vm := goja.New()
	_, err := vm.RunScript("marked.js", string(markedJsBytes))
	if err != nil {
		return err
	}

	marked := vm.ToValue(vm.Get("marked").Export())
	var markedCall goja.Callable
	if err = vm.ExportTo(marked, &markedCall); err != nil {
		return err
	}

	markdownToHTML = func(str string, opts map[string]interface{}) string {
		sRW.Lock()
		defer sRW.Unlock()
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

// 生成字节的单元
//func genres(filename string) {
//
//	baseName := path.Base(filename)
//	if strings.Count(baseName, ".") > 0 {
//		baseName = baseName[:strings.Index(baseName, ".")]
//	}
//
//	bs, err := ioutil.ReadFile(filename)
//	if err != nil {
//		return
//	}
//	codeBytes := bytes.NewBufferString("package main\r\n\r\nvar (\r\n    " + baseName + "JsBytes = []byte {\r\n")
//	for i, b := range bs {
//		if i > 0 {
//			codeBytes.WriteString(", ")
//		}
//		if i%12 == 0 {
//			if i > 0 {
//				codeBytes.WriteString("\r\n")
//			}
//			codeBytes.WriteString("        ")
//		}
//		codeBytes.WriteString("0x" + fmt.Sprintf("%.2X", b))
//	}
//	codeBytes.WriteString("}\r\n)\r\n")
//	ioutil.WriteFile("../"+baseName+"js.go", codeBytes.Bytes(), 0775)
//}
