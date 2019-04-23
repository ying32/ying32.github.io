鼠标相关API。Mouse由Delphi在单元initialization和finalization时自动构造和析构。  

常用方法：  

* `CursorPos`  
获取当前光标位置（即鼠标位置，相对屏幕，以左上角为原点，即（0,0））
```go
pt := vcl.Mouse.CursorPos()
fmt.Println("x:", pt.X, ", y:", pt.Y)
```