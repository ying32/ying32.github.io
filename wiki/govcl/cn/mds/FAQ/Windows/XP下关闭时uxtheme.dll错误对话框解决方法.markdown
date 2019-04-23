方法一、增加以下代码即可屏蔽    

```go
vcl.Application.SetOnException(func(sender vcl.IObject, e *vcl.Exception) {
})
```


方法二、删除manifest文件中的一段  

```xml
<assemblyIdentity
        type="win32"
        name="Microsoft.Windows.Common-Controls"
        version="6.0.0.0"
        publicKeyToken="6595b64144ccf1df"
        language="*"
        processorArchitecture="*"/>
```
恢复成windows经典样式的界面会有点难看，可以考虑使用样式替代。  

*以上两种方法任选一*