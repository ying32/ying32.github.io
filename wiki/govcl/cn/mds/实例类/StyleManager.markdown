样式管理`windows`，其实在go中以“伪实例类”形式表现，内部实际为一个class类，理解为静态类吧。`只支持vcl组件库，并且只能在windows上用，在linux或者macOS上使用时会无效。`


* `IsValidStyle`
检测指定样式文件是否有效
```go
fmt.Println(vcl.StyleManager.IsValidStyle("filename.vsf"))
```


* `LoadFromFile`
从磁盘中加载指定样式文件
```go
style := vcl.StyleManager.LoadFromFile("filename.vsf")
```


* `CheckSysClassName`
检测样式类，这个一般没用到
```go
fmt.Println(vcl.StyleManager.CheckSysClassName("className"))
```


* `TrySetStyle`
尝试从资源中加载样式，资源有指定格式的，参数是资源名
```go
fmt.Println(vcl.StyleManager.TrySetStyle("resname", false))
```
 

* `SetStyle1`
设置样式，参数为样式指针 
```go
vcl.StyleManager.SetStyle1(vcl.StyleManager.LoadFromFile("filename.vsf"))
```
 

* `SetStyle2`
设置样式，资源名
```go
vcl.StyleManager.SetStyle2("resName")
```


* `SetStyleFromFileName`
设置样式，资源文件
```go
vcl.StyleManager.SetStyleFromFileName("样式文件名")
```
 

* `ActiveStyle`
获取当前激活的样式指针
```go
fmt.Println(vcl.StyleManager.ActiveStyle())
```

 
* `SystemStyle`
获取当前系统样式指针
```go
fmt.Println(vcl.StyleManager.SystemStyle())
```
 

* `Enabled`
当前是否启用样式
```go
fmt.Println(vcl.StyleManager.Enabled())
```
 

* `IsCustomStyleActive`
当前是否自定义样式激活
```go
fmt.Println(vcl.StyleManager.IsCustomStyleActive())
```
 

* `UnRegisterStyle`
解除样式的注册，参数为样式指针
```go
fmt.Println(vcl.StyleManager.UnRegisterStyle(styleptr))
```

 
* `RegisterStyle`
样式的注册，参数为样式指针
```go
fmt.Println(vcl.StyleManager.RegisterStyle(styleptr))
```
 

* `Style`
从已经注册的样式列表中返回指定名称的样式指针
```go
fmt.Println(vcl.StyleManager.Style("name"))
```


 