 **windows下独有的：** 

* `IsWow64` 
判断当前进程是否运行在64上  
```go
fmt.Println(win.IsWow64())
```

---
* `IsWow64Process` 
检测进程是否运行在64位下  
```go
if win.IsWow64Process(win.GetCurrentProcess()) {

}
```
---

* `GetCurrentProcess` 
返回当前进程伪句柄  
```go
fmt.Println(win.GetCurrentProcess())
```
---

* `GetSelfModuleHandle` 
获取自身模块实例句柄  
```go
fmt.Println(win.GetSelfModuleHandle())
```

---

* `GetModuleHandleW` 
获取指定模块句柄，只有模块加载后才能获取到
```go
fmt.Println(win.GetModuleHandleW("xxx.dll"))
```

---

* `LoadIconW` 
从实例资源中加载icon
```go
fmt.Println(win.LoadIconW(win.GetSelfModuleHandle(), 1))
```

---

* `MessageBoxW` 
消息框，第三个参数值参见win包中的const.go中MessageBoxs标识 
```go
win.MessageBoxW(0, "text", "caption", 0)
```

---

* `GetClientRect` 
获取指定窗口句柄的客户区矩形  
```go
r := win.GetClientRect(hWnd)
```