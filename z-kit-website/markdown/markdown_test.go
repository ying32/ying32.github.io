package markdown

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"path"
	"strings"
	"testing"
)

func TestAll(t *testing.T) {
	//genres("highlight.min.js")
	//genres("highlight.js")

	opts := map[string]interface{}{"gfm": true, "breaks": true, "tables": true, "highlight": true}
	t.Log(CovToHTML("```go\r\nfunc abc() {\r\n}\r\n```\r\n", opts))
}

// 生成字节的单元
func genres(filename string) {

	baseName := path.Base(filename)
	if strings.Count(baseName, ".") > 0 {
		baseName = baseName[:strings.Index(baseName, ".")]
	}

	bs, err := ioutil.ReadFile(filename)
	if err != nil {
		return
	}
	codeBytes := bytes.NewBufferString("package markdown\r\n\r\nvar (\r\n    " + baseName + "JsBytes = []byte {\r\n")
	for i, b := range bs {
		if i > 0 {
			codeBytes.WriteString(", ")
		}
		if i%12 == 0 {
			if i > 0 {
				codeBytes.WriteString("\r\n")
			}
			codeBytes.WriteString("        ")
		}
		codeBytes.WriteString("0x" + fmt.Sprintf("%.2X", b))
	}
	codeBytes.WriteString("}\r\n)\r\n")
	ioutil.WriteFile(baseName+"js.go", codeBytes.Bytes(), 0775)
}
