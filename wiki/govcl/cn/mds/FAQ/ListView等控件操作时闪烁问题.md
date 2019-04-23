这个问题一般开启对应控件的双缓冲机制即可。

* 单个ListView开启
```go
    ListView.SetDoubleBuffered(true) // 仅仅只当前开启的ListView有效。
```

* 开启当前窗口全局双缓冲  
```go
   MainForm.SetDoubleBuffered(true) // 此时所有控件都将使用双缓冲机制。
```