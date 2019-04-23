这里的说明仅针对Windows上的使用，其它操作系统不影响。  

`libvcl在新版本Delphi中默认使用Unicode字符编码。`   

`liblcl则使用UTF-8编码。`   

在win包中定义了 GoStr，CStr 作为转化，根据情况在调用Windows API时适时使用。