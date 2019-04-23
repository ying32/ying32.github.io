Delphi中管理窗口程序的类实例。Application由Delphi在单元initialization和finalization时自动构造和析构。  

常用方法：

* `SetIconResId`  
设置App全局icon。从资源中加载，具体看rsrc后的id， 仅windows
```go
vcl.Application.SetIconResId(3)
```

* `Initialize`  
初始始应用程序相关设置，必要写的
```go
vcl.Application.Initialize()
```


* `Run`  
开始整个程序的消息循环,直到收到WM_QUIT或者主窗口收到WM_CLOSE退出循环，并结束程序
```govcl
vcl.Application.Run()
```


* `CreateForm`  
创建并返回一个新的TGoForm实例
```go
/*
 TApplication.CreateForm 一般不建议使用NewForm，而优先使用CreateForm

 用法：
  1、mainForm := vcl.Application.CreateForm()    // 直接返回
  2、vcl.Application.CreateForm(&mainForm)       // 无资源加载，只会绑定窗口的事件，不会绑定子组件事件
  3、vcl.Application.CreateForm(&mainForm, true) // 无资源加载，当第二个参数为true时在OnFormCreate调用完后会绑定子组件事件

  4、vcl.Application.CreateForm("form1.gfm", &mainForm)  // 从资源文件中填充子组件，并绑定所有事件
  5、vcl.Application.CreateForm(form1Bytes, &mainForm)   // 从字节中填充子组件，并绑定所有事件
*/
mainForm := vcl.Application.CreateForm()
```

* `MainFormOnTaskbar`、`SetMainFormOnTaskbar`  
获取或者设置主窗口是否显示在任务栏上，一般默认写True
```go
fmt.Println(vcl.Application.MainFormOnTaskbar())
vcl.Application.SetMainFormOnTaskbar(true)
```


* `ProcessMessages`  
处理消息，当某主线程中发生阻止时会造成整个消息循环阻止，UI无响应，所以在阻止中，比如循环中加上ProcessMessages可解决UI无响应问题。
```go
vcl.Application.ProcessMessages()
```


* `Terminate`  
结束应用程序，发出WM_QUIT消息
```go
vcl.Application.Terminate()
```


* `ExeName`  
获取当前运行的应用程序文件名，含路径
```go
fmt.Println(vcl.Application.ExeName())
```


* `Icon`, `SetIcon`  
获取或者设置应用程序的图标，一般默认会在程序资源中找名为MAINICON的ico资源作为应用程序图标。
```go
// 手动指定
ico := vcl.NewIcon()
defer ico.Free()
// LoadFromResourceID(rtl.MainInstance(), 3) // 3为资源中的id，具体要根据自己生成的.syso文件中定义的id
ico.LoadFromFile("xxx.ico")
vcl.Application.SetIcon(ico)
// 或者
vcl.Application.Icon().SetHandle(win.LoadIcon(rtl.MainInstance(), 3))
// 又或
vcl.Application.Icon().SetHandle(win.LoadIcon2(rtl.MainInstance(), "MAINICON"))
```


* `Title`, `SetTitle`  
获取或者设置应用程序标题
```go
fmt.Println(vcl.Application.Title())
vcl.Application.SetTitle("我是标题")
```

* `SetFormScaled`  
有关dpi的绽放 
```go
vcl.Application.SetFormScaled(true)
```

