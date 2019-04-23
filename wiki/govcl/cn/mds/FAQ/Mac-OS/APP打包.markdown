MacOS上的应用与linux、Windows的打包方式不一样，直接运行应用程序会出现卡住现像（如果用cocoa接口的liblcl.dylib则不会卡住）。
需要生成MacOS下app专有格式目录及文件。  

tools包中提供了一个快捷打包函数，只要导入调用此函数即可生成MacOS下的app。

> 导入包：
```go
import "github.com/ying32/govcl/vcl/exts/tools"
```
在main函数下面加上以下代码：
```go
// mac下记得发布时去掉
tools.RunWithMacOSApp()
```

**先将liblcl.dylib复制到`$GOPATH/bin`目录中，运行时会自动复制。**    


MacOS App目录结构举例：  

```
govcl.app  
   |----Contents  
         |----MacOS  
              |----govcl // 二进制文件  
         |----PkgInfo    //   
         |----info.plist // 非常重要的文件  
         |----Resources  // 资源目录
              |----govcl.icns // 图标   
```

info.plist文件格式：  

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>zh_CN<!--应用的语言--></string>
	<key>CFBundleExecutable</key>
	<string>govcl<!--应用程序名与可执行文件同名--></string>
	<key>CFBundleName</key>
	<string>govcl<!--应用程序名与可执行文件同名--></string>
	<key>CFBundleIdentifier</key>
	<string>ying32.govcl<!--这里要填, 像java包一样的命名--></string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundlePackageType</key>
	<string>APPL</string>
	<key>CFBundleSignature</key>
	<string>proj</string>
	<key>CFBundleShortVersionString</key>
	<string>0.1</string>
	<key>CFBundleVersion</key>
	<string>1</string>
	<key>CSResourcesFileMapped</key>
	<true/>
	<key>CFBundleIconFile</key>
	<string>govcl.icns<!--这里是应用程序图标--></string>
	<key>CFBundleDocumentTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Viewer</string>
			<key>CFBundleTypeExtensions</key>
			<array>
				<string>*</string>
			</array>
			<key>CFBundleTypeOSTypes</key>
			<array>
				<string>fold</string>
				<string>disk</string>
				<string>****</string>
			</array>
		</dict>
	</array>
	<key>NSHighResolutionCapable</key>
	<true/>
        <key>NSHumanReadableCopyright</key>
	<string>copyright 2017-2018 ying32.com<!--这里是版权信息--></string>
</dict>
</plist>

```