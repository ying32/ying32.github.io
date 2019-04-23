Delphi/Lazarus中的所有`可视的UI组件`都**非**`线程`或`协程`安全的。

所以在协程中操作UI组件是`必须`使用vcl.ThreadSync来同步到主线程（UI线程）中执行。 

### 正确的操作方式

```go
  go func() {
     vcl.ThreadSync(func(){
        f.Button.SetCaption("Hello.")
        fmt.Println(f.Button.Caption())
     })
  }()
```

### 错误的操作方式

```go
  go func() {
        f.Button.SetCaption("Hello.")
        fmt.Println(f.Button.Caption())
  }()