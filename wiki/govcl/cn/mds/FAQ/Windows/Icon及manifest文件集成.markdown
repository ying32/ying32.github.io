 **仅限于windows**   

### 方法一  
使用mingw64或mingw32中的windres.exe

* 准备好rc文件，rc文件格式为资源脚本每一行一个，格式为  资源名 资源格式 文件名。  

如  govcl.rc里面放置以下内容。    
```
1 MANIFEST "your.manifest"
MAINICON ICON "your.ico"
```
注：MANIFEST 必须资源名必须为1， manifest文件格式见`方法二`中的。 如果资源中存在一个名为“MAINICON”的图标资源，则会默认加载为application图标。      

* 使用windres.exe编译为syso文件   

```bat
windres.exe -o govcl.syso govcl.rc
```  

注：在rc脚本中也可以放置其它格式的，具体网上找rc文件格式的说明。  

### 方法二  

需要使用rsrc工具生成syso文件，`最近作者好像更新了，生成时屏蔽了输出，所以可能看不到相关的资源id`   
> go get github.com/akavel/rsrc

```bat
rsrc -ico="your.ico" -manifest="your.manifest"
```

然后将生成的文件复制到你的工程目录下  

> manifest文件内容  
>  
> 如需要请求管理员权限，只需要将  
> level="asInvoker" 改为 level="requireAdministrator"  

```xml  

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0" xmlns:asmv3="urn:schemas-microsoft-com:asm.v3">
  <asmv3:application>
    <asmv3:windowsSettings xmlns="http://schemas.microsoft.com/SMI/2005/WindowsSettings">
      <dpiAware>True/PM</dpiAware>
    </asmv3:windowsSettings>
  </asmv3:application>
  <dependency>
    <dependentAssembly>
      <assemblyIdentity
        type="win32"
        name="Microsoft.Windows.Common-Controls"
        version="6.0.0.0"
        publicKeyToken="6595b64144ccf1df"
        language="*"
        processorArchitecture="*"/>
    </dependentAssembly>
  </dependency>
  <trustInfo xmlns="urn:schemas-microsoft-com:asm.v3">
    <security>
      <requestedPrivileges>
        <requestedExecutionLevel
          level="asInvoker"
          uiAccess="false"
        />
        </requestedPrivileges>
    </security>
  </trustInfo>
<compatibility xmlns="urn:schemas-microsoft-com:compatibility.v1"> 
	<application> 
		<!--The ID below indicates app support for Windows Vista -->
		<supportedOS Id="{e2011457-1546-43c5-a5fe-008deee3d3f0}"/> 
		<!--The ID below indicates app support for Windows 7 -->
		<supportedOS Id="{35138b9a-5d96-4fbd-8e2d-a2440225f93a}"/>
		<!--The ID below indicates app support for Windows 8 -->
		<supportedOS Id="{4a2f28e3-53b9-4441-ba9c-d69d4a4a6e38}"/>
		<!--The ID below indicates app support for Windows 8.1 -->
		<supportedOS Id="{1f676c76-80e1-4239-95bb-83d0f6d0da78}"/>
		<!--The ID below indicates app support for Windows 10 -->
		<supportedOS Id="{8e0f7a12-bfb3-4fe8-b9a5-48fd50a15a9a}"/>			
	</application> 
</compatibility>
</assembly>


``` 

### 方法三
* manifest文件  

将上面的manifest文件内容保存为文件，并重命名与exe同名，如`govcl.exe`对应`govcl.exe.manifest`  

