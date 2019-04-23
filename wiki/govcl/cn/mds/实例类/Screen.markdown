与屏幕相关的API。Screen由Delphi在单元initialization和finalization时自动构造和析构。  

常用方法：  

**以像素为单位**  

* `Width`  
当前屏幕宽度
```go
fmt.Println(vcl.Screen.Width())
```


* `Height`  
当前屏幕高度 
```go
fmt.Println(vcl.Screen.Height())
```


* `MonitorCount`  
监视器总数，多显示器情况
```go
fmt.Println(vcl.Screen.MonitorCount())
```


* `Monitors`  
获取指定索引监视器
```go
fmt.Println(vcl.Screen.Monitors(0))
```

* `FormCount`  
获当前app的Form总数
```go
fmt.Println(vcl.Screen.FormCount())
```

* `Forms`  
获当前app的Form索引
```go
fmt.Println(vcl.Screen.Forms(0))
```


**桌面相关api，包含任务栏**  
* `DesktopHeight`  
桌面高度
```go
fmt.Println(vcl.Screen.DesktopHeight())
```


* `DesktopLeft`  
桌面左边位置
```go
fmt.Println(vcl.Screen.DesktopLeft())
```


* `DesktopTop`  
桌面顶边位置
```go
fmt.Println(vcl.Screen.DesktopTop())
```


* `DesktopWidth`  
桌面的宽度
```go
fmt.Println(vcl.Screen.DesktopWidth())
```


**工作区域，不包含任务栏**  
* `WorkAreaHeight`    
工作区域高度
```go
fmt.Println(vcl.Screen.WorkAreaHeight())
```


* `WorkAreaLeft`  
工作区域位置
```go
fmt.Println(vcl.Screen.WorkAreaLeft())
```


* `WorkAreaTop`  
工作区域顶边位置
```go
fmt.Println(vcl.Screen.WorkAreaTop())
```


* `WorkAreaWidth`  
工作区域的宽度
```go
fmt.Println(vcl.Screen.WorkAreaWidth())
```


* `Fonts`  
获取当前系统字体列表
```go
fonts := vcl.Screen.Fonts()
for i := 0; i < fonts.Count(); i++ {
   fmt.Println(fonts.Strings(i))
}
```


* `Cursor`、`SetCursor`  
获取或者设置当前屏幕光标样式
```go
fmt.Println(vcl.Screen.Cursor())
vcl.Screen.SetCursor(types.CrArrow)
```
 