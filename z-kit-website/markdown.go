package main

import (
	"github.com/dop251/goja"
)

func covToHTML(str string) string {
	if str == "" {
		return ""
	}
	// marked($("#mdcontext").text(), {gfm: true, breaks: true, tables:true}
	vm := goja.New()
	_, err := vm.RunScript("marked.js", string(markedJsBytes))
	if err != nil {
		return ""
	}
	marked := vm.ToValue(vm.Get("marked").Export())
	var markedCall goja.Callable
	if err = vm.ExportTo(marked, &markedCall); err != nil {
		return ""
	}
	// {gfm: true, breaks: true, tables:true}
	getOpts := func() interface{} {
		return map[string]interface{}{"gfm": true, "breaks": true, "tables": true}
	}
	v, err := markedCall(marked, vm.ToValue(str), vm.ToValue(getOpts()))
	if err != nil {
		return ""
	}
	return v.String()
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
