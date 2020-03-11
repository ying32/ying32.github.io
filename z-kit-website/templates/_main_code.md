```golang
 package main
 
 import (
    "github.com/ying32/govcl/vcl"
    // 如果你使用自定义的syso文件则不要引用此包
    _ "github.com/ying32/govcl/pkgs/winappres"
 )
 
 type TMainForm struct {
     *vcl.TForm
     Btn1     *vcl.TButton
 }
 
 var (
     mainForm *TMainForm
 )
 
 func main() {
     vcl.Application.Initialize()
     vcl.Application.SetMainFormOnTaskBar(true)
     vcl.Application.CreateForm(&mainForm)
     vcl.Application.Run()
 }
 
 // -- TMainForm
 
 func (f *TMainForm) OnFormCreate(sender vcl.IObject) {
     
 }
 
 func (f *TMainForm) OnBtn1Click(sender vcl.IObject) {
     vcl.ShowMessage("Hello!")
 }
 
```