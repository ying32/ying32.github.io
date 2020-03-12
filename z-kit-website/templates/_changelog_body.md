## 下个版本，dev分支(Next version, dev branch)
**Please use Google Translate if your native language is not Chinese.**   

-- govcl --  

* 修改：liblcl：`TListView`、`TTreeView`一些默认属性修改，`ScrollBars`默认为`ssAutoBoth`。非Windows下TTreeView的`TreeLinePenStyle`默认值为`psSolid`。`TTreeView.ExpandSignType`默认为`tvestArrowFill`.。
* 修复：修复`macapp`打包时执行命令传入的参数会在某些时候不正确。  
* 修改：Linux下的`TMiniWebview`调用`Navigate`时不再设置控件焦点。  
* 修改：修改自动绑定事件当没有找到事件类型时，检测事件类型起始是否为“0-9,_”，如果是则不打印错误提示。  
* 增加：使用[Go Graphics - 2D](github.com/fogleman/gg)绘制并显示到GoVCL的控件上，例子见`samples/drawusegg`，演示视频见`samples/drawusegg/video.mp4`。 
* 增加：使用[Go Image Filtering Toolkit](https://github.com/disintegration/gift)处理图片滤镜并显示到GoVCL的控件上，例子见`samples/drawfilterusegift`，演示视频见`samples/drawfilterusegift/video.mp4`。 
* 增加：`TForm`增加`InheritedWndProc`方法，用于在`TForm`的`OnWndProc`中使用。
* 修改：改变`TForm`的`OnWndProc`回调函数，移除`handled`参数。 
* 增加：添加一个`vcl/bitmap`包，用于将Go的Image转为VCL/LCL的图像。 
* 增加：使用[Charts for Go](https://github.com/vdobler/chart)绘制图表并显示到GoVCL的控件上，例子见`samples/drawchart`。 
* 增加：`types`包中添加新的类型`TSet`，并添加相关函数`NewSet`、方法`TSet.Include`、`TSet.Exclude`、`TSet.In`，如：`style := types.NewSet(types.xx)，style.Include(types.xxx)，style.In(types.xx)`。用于简化Delphi/Lazarus的集合操作，原来使用了的可能需要修改为新的方式。
* 丢弃：`rtl.Include`、`rtl.Exclude`、`rtl.InSets`标记为`Deprecated`。  
* 增加：添加`vcl/locales`包及默认的子包`zh_CN`用于本地化一些对话框内的文本。  
* 修改：修改`samples/menu`例子，增加在macOS下的Application菜单中添加项目。  
* 增加：`TBitmap`添加新的属性`TransparentMode`、`AlphaFormat`(仅libvcl)。
* 增加：添加一个`vcl.LclLoaded`函数。
* 增加：`vcl/bitmap`包添加新的函数`ToBitmap2`、`ToGoImage`。
* 增加：`TBitmap`添加`BeginUpdate`、`EndUpdate`和`Clear`方法(仅liblcl有效)。
* 修改：重构事件中ID的获取（主要是解决以前在某些情况下造成事件关联不对的问题）。
* 添加：所有对象添加`Is`，用于简化对象的判断，如：`button.Is().Control()`。
* 修改：所有对象都添加一个`As<classname>`函数，用于动态转换对象，如：`vcl.AsButton(sender)`。所有对象的`<classname>FromInst`, `<classname>FromObj`, `<classname>FromUnsafePointer`标记为弃用。
* 添加：`TStrings`和`TStringList`添加`S`和`SetS`用于简化原来的`Strings`和`SetStrings`方法。
* 修改：调整自动绑定事件，当不使用资源构TForm或者没有找到对应TForm资源时默认在创建完后绑定子组件事件。 
* 添加：liblcl：`TMiniwebview`初步支持Linux下的gtk3。

> 本次的更新会造成生成的可执行文件增大500kb左右。

-- res2go --    

## 当前版本，master分支(Current version, master branch)

## v1.2.9  

-- govcl --  
 
* 增加：添加新的枚举类型:`TDefaultMonitor`。   
* 增加：`TGoForm`添加`DefaultMonitor`、`Monitor`属性。   
* 增加：改变事件id的获取。    
* 增加：vcl包添加一个`RunApp`函数用于简化main函数中创建Form对象，用法参见`samples/basicResForm`例子。   
* 增加：添加一个新的包`pkgs/libname`函数，用于加载指定位置的libvcl或者liblcl，用法参见`samples/customLibTest`例子。   
* 变更：`vcl/exts/macapp`包移至`pkgs/macapp`。
* 增加：`TCanvas`添加`Pixels`属性。   
* 增加：添加一个新的`drawrose`例子。  
* 修复：修复Windows下`TMiniWebview`在64位程序中不能设置IE版本。 
* 增加：`win`包中增加一个`GoPtrStr`函数。
* 变更：`vcl/samples/mp3Player/bass`包移到`pkgs/bass`。
* 变更：`vcl/samples/simplelibvlc/libvlc`包移到`pkgs/libvlc`。
* 变更：`vcl/exts/skinh`包移到`pkgs/skinh`。
* 变更：`vcl/exts/wke`包移到`pkgs/wke`。
* 变更：`vcl/exts/miniblink`包移到`pkgs/miniblink`。
* 变更：`vcl/exts/winappres`包移到`pkgs/winappres`。
* 变更：`vcl/exts/multilang`包移到`vcl/multilang`。
 
-- res2go --   

* 更新：更新`winappres`包路径。

## v1.2.8  

 -- govcl --    

* 增加：liblcl：部分控件增加`ParentBackground`属性。  
* 修改：调整`liblvcl`、`liblcl`资源窗口构建部分。   
* 修改：`Application.CreateForm`方法今后不需要传入指定的字节数据了，`res2go`与`UI设计器`在保存时会添加注册相关的代码。  
* 移除：移除掉原来自己处理缩放相关（`vcl.Application.SetFormScaled`无效了，待我有2k显示器后再测试这个问题）。   
* 增加：liblcl：`TMiniWebview`初步支持Linux。  
* 增加：添加一个Windows下`listviewitemedit`例子，用于双击项目直接编辑数据。  
* 增加：`win`包：添加一些Windows下TListView API。  
* 增加：对`types`包中的一些类型定义增加了一些对应的方法函数。  
* 修改：调整go字符串与libvcl/liblcl交互的方式。  
* 增加：Windows下的`TMiniWebview`增加`SetIEVersion`、`GetIEVersion`方法，并更新MiniWebview例子。
* 增加：`rtl`包中增加了一些文件名相关的函数。  
* 尝试：尝试支持Windows 64位的内存dll加载模式（未解决）。 
* 增加：`TAction`和`TMenuItem`组件添加`AutoCheck`属性。 
* 增加：`TCanvas`增加`Polygon`、`Polyline`、`PolyBezier`、`PolyBezierTo(仅限libvcl)`方法。  
* 修改：`dylib`包移动到新的仓库`github/ying32/dylib`。   
* 修复：修复libvcl的`TMiniWebview`不响应按键事件。 
* 尝试：尝试解决windows下`liblcl TMiniWebview`不响应按键问题(未解决)。  
* 修改：liblcl：Windows下的`TTrayIcon`创建时，默认加载`Application`的Icon。  
* 增加：添加一个`vcl.RegisterFormResource`，用于`CreateForm`时自动查找对应资源。
* 增加：添加一个简易的markdown编辑器，用于演示。
* 增加：liblcl：`TGoFom`添加兼容Delphi的方法`ScaleForPPI`、`ScaleForCurrentDpi`。
* 增加：添加一个`formscale`例子。
* 增加：`Tools`目录下添加一个`libBuild`工具，用于命令行构建libvcl或者liblcl。
* 修改：`exts/tools`包更改为`exts/macapp`包，同时更新macapp里包的打包方式和添加app图标。
* 修改：Windows下`TMiniWebview`不再屏蔽右键和鼠标点击选择功能。 
* 增加：增加一个Windows下的`winappres`资源包，用于快速引用默认的syso文件。
* 增加：`Tools`目录下添加一个`LazarusPatch`工具，用于对Lazarus源代码打补丁，以兼容Delphi或者其他的。  
* 增加：`Tools`目录下添加一个`winRes`模板，用于生成windows下的syso文件。
* 增加：编译liblcl时添加`USED_BY_LAZLOGGER_DUMMY`指令用于屏蔽lcl的调试信息（似乎无效）。
* 增加：liblcl兼容Delphi资源中的TListView的`ItemData`和TTreeView的`NodeData`，需要使用`Tools/LazarusPatch`打补丁后重新编译。   
* 更改：启用新的GoVCL图标，图标设计来自[Free Logo Design](https://www.freelogodesign.org/preview?lang=en&name=GoVCL&logo=2ffb4d90-2095-4daa-b334-389bbd40504c)。  
 

 -- res2go --   

* 删除：移除`-outbytes`选项，总是为`True`。
* 增加：增加注册当前Form资源，用于自动加载。
* 修改：`-outres`参数改为添加一个`winappres`包。

## v1.2.7  

 -- govcl --  

* 修复：修复go版本>=1.13时，liblcl中字符串被GC回收问题。
* 修改：更新miniblink扩展包，测试x64基本没问题，但x86仍有会有错误框弹出。
* 修改：自动绑定事件中， TFrame的初始事件名称为OnFrameCreate。    
* 修复：liblcl：尝试修复MacOS下文本控件Text属性中文错误问题。   
* 修改：liblcl：切换至Lazarus 2.0.6版本编译，[Fixes for 2.0.6](https://wiki.freepascal.org/Lazarus_2.0_fixes_branch#Fixes_for_2.0.6_.28merged.29)。   
* 调整：文本控件超大字符串获取问题。  

 -- res2go --   

* 修复：修复TFrame可能转换不正确。   

## v1.2.6.4

 -- govcl --  

* 删除：libvcl/liblcl：不再导出"DGetParam"函数，使用go原生获取。  
* 修改：libvcl/liblcl："SendEventSrc"函数调整为最大支持12个参数，与导出的”MySyscall“函数支持参数个数保持一致。  
* 调整：govcl最低要求liblcl或者libvcl二进制版本为1.2.6。  
* 增加：添加支持Window 32位libvcl/liblcl内存加载方式。需要在编译命令中加入`-tags memorydll`标识，具体请参见gitee上的WIKI和例子。  
* 增加：添加一个Windows 32位下内存加载libvcl/liblcl示例：memloaddll。  
* 增加：添加一个TValueListEditor示例valuelisteditor。
* 增加：添加一个Windows下注册全局热键示例：registerHotKey。
* 增加：win包添加一些注册热键相关的常量与API。
* 增加：rtl包添加一个ShiftStateToWord函数。
* 增加：添加一个自绘时钟示例（见samples/clock示例）。
* 增加：新增TComboBoxEx、TFrame及相关类、属性、方法、事件。
* 调整：可从资源中加载TFrame（见samples/res2goTest/Test示例）。
* 增加：添加一个TComboBoxEx组件示例。
* 修复：修复部分控件 GetTextBuf、GetSelTextBuf不生效问题。
* 修复：修复部分控件的Text属性因为超大字符串造成内存访问错误。

 -- res2go --  

* 增加：支持TComboBoxEx导出，添加默认构造方法。

## v1.2.5 

 -- govcl --  

* 新增：增加一个listviewadv1例子。  
* 新增：liblcl：添加部分控件的“AddItem”方法。  
* 修复：liblcl：“TDateTime”时区问题。
* 新增：liblcl：支持“TCalendar”构建（实际为“TMonthCalendar”）。  
* 新增：libvcl：添加兼容Lazarus设计器的TCalendar类。
* 新增：liblcl：为所有继承自TControl的组件添加“Margins”属性。
* 新增：liblcl：添加兼容Delphi的“TMargins”类。
* 修改：独立vcl.ThreadSync的回调。 
* 修改：libvcl：使用SendMessage替代TThread.Synchronize，用来解决某些情况下异常问题，并保留原有方法并命名为vcl.ThreadSyncVcl。 
* 增加：新增一个扩展组件机制，在不修改原govcl代码的情况下扩展组件，演示例程为myext。

 -- res2go --  

* 修复：遇到字符串的“+”符号时异常问题。
* 增加：支持liblcl“TCalendar”组件导出。 
* 修改：支持指定组件包名。

## v1.2.4 

 -- govcl --

* 修复： Windows下liblcl某些控件不能正确应用Windows Theme问题。
* 新增：`win`包添加Windows API: `EnumWindows`、`EnumChildWindows`、`SetBkMode`以及一些Windows下ListView常量。。 
* 新增：添加一个simplelibvlc测试例程（已在Windows、MacOS、Linux Mint下测试通过，linux表现不佳）（主要测试可行性）。 
* 调整：由于sourceforge.net已经可以访问，liblcl macOS下的二进制已经由2.0.2编译。
* 新增：添加一个新包`floatpatch`：用于解决syscall不能返回浮点结果的问题（不支持arm）。 
* 修改：Windows下的libvcl和liblcl移除`TMiniWebView`的边框和鼠标右键支持。
* 新增：添加`GetGDKWindowXID`解决linux下获取控件的X11 ID。
* 新增：添加一个新例子：listviewadvcustomdraw。
* 新增：添加TForm的ShowInTaskBar属性(用来兼容Lazarus)。  
* 新增：Windows下的TMiniWebView添加ExecuteScript、ExecuteJS、LoadHTML方法及OnJSExternal事件，用法参考samples\miniwebview例子。 
* 新增：添加一个新的组件：TTaskDialog以及TTaskDialog对应例子samples\taskdialog。
* 修改：进一步完善macOS下TMiniWebview组件并移除carbon支持。
* 重要：不再提供macOS 32位的预编译二进制liblcl.dylib了，如有需要可自行编译。

 -- res2go --

* 修复：res2go内存访问错误。
* 调整：提前`-outres`参数语句
* 调整：加载dfm、lfm、lpr、dpr文件访问dpr文件访问模式。
* 增加：支持导出TTaskDialog。

## v1.2.3 

 -- govcl --

* liblcl添加TApplication.RestoreTopMosts方法，用来兼容libvcl。
* 自动绑定事件中，如果组件不支持某个事件则打印提示。
* "liblcl"源码更新至Lazarus 2.0版本LCL库，[Lazarus_2.0.0_release_notes](http://wiki.lazarus.freepascal.org/Lazarus_2.0.0_release_notes)、[Lazarus_2.0_fixes_branch](http://wiki.freepascal.org/Lazarus_2.0_fixes_branch)。
* 添加一些TTreeView常量和结构。
* TListView的TListItem添加ListView属性。
* TTreeView的TNodeItem添加TreeView属性。
* 添加一个treeview_checkbox例程，只适合用Windows。
* 添加一个pagecontrolwizard演示例程(macOS和linux有bug)。
* 调整Windows下dll搜索，当exe目录下有符合条件的liblcl.dll则优先加载。
* liblcl源代码已经采用[Lazarus2.0.2](https://forum.lazarus.freepascal.org/index.php/topic,45062.0.html?PHPSESSID=mgrsgl8c6kvr6hbr4v5rc1hrf0)编译
* macOS下的liblcl现在提供cocoa 64位的dylib

 -- res2go --

* 添加“-pkgname”选项。用于生成的Form相关的go文件包名，不包括main.go文件。
* 添加“-watch”参数，用于监视“-path”目录的文件改变，并自动转换。

## v1.2.2 

 -- govcl --

* 自动绑定事件增加：当“afterBindSubComponentsEvents=true”时自动设置组件的名称。 
* libvcl: TThumbBarButton增加ButtonState属性。
* 更加完善的mp3Player例子。 
* 增加vcl.SelectDirectory3函数，用于简化vcl.SelectDirectory2函数。 
* 添加“rtl.LibStringEncoding”和“rtl.LibVersion”两个函数，用于获取当前库信息。 
* 修复“multilang”包，当前可执行文件目录不存在“Langs”目录时程序崩溃的错误。  
* 多国语言支持TStrings类型本地化，例如：TComboBox.Items、TListBox.Items。  
* 添加新的jsonToGo、jsonViewer例子。
  * jsonToGo是用于将一段json数据转为Go的结构，以方便json.Unmarshal填充。
  * jsonViewer是用于将一段json数据以树的形式显示
* 添加一些剪切板格式常量。

 -- res2go --

* 添加“-pause”选项。主要用于集成在IDE内的。选项说明：结束后根据选项暂停，比如： -pause "ew"，表示有错或者警告，可选为“e”,“w”,“a” e=错误，w=警告，a=忽略其它选项，总是显示。  
* 添加支持Delphi编译，已经测试在Delphi 10.3 社区版编译通过，并简单测试转换结果。  
* 根据“.lpr”或“.dpr”文件中的内容动态删减“main.go”中“vcl.Application.CreateForm”。 

## v1.2.1  

2018-11-20  

 -- govcl --  

* govcl增加的“arm”编译约束。
* liblcl类补丁，兼容Delphi。
* 添加linux下获取当前系统语言。
* win包添加新的winapi: SetForegroundWindow
* libvcl库添加新的png解码器“TPortableNetworkGraphic”，用来兼容liblcl。
* 使用新的“hash”函数传递事件回调ID，解决上下文信息丢失问题。
* 修改liblcl窗口默认宽度=678和高度=321。
* api包中不再直接公开eventCallbackMap、messageCallbackMap两个变量，并使用EventCallbackOf、MessageCallbackOf替代。
* api包DSynchronize函数，当执行完后删除事件ID。
* 重构“事件关联”功能。
* “事件关联”增加tag字段用于res2go共享事件，支持多个事件共享。
* rtl包添加一个"IsNil"函数，用于判断interface{}为空。
* libvcl与liblcl移除TGoEvent类型，改用方法地址替代TGoEvent 。
* libvcl修改AllowDropFiles属性read方法不再使用变量。并修复样式改变的情况下失效问题。
* liblcl使用宏简化事件代码。
* 添加一个新的TMiniWebview组件，支持liblcl/libvcl 32bit/64bit,  macOS32/cocoa接口。
* 调整exts/tools包中mactool，如果存在则复制$GOPATH/bin/liblcl.dylib至当前可执行文件目录。
* liblcl:修复TCanvas.TextRect2。
* 添加新方法：TCanvas.TextRect3。
* liblcl: TStringGrid、TDrawGrid、TValueListEditor添加OnDrawCell事件。
* 添加新枚举类型TGridOptionLz，用于liblcl库Grid控件Options属性。因为无法兼容Delphi。
* 添加一个新的drawgrid例子，见samples/grids/drawgrid。 
* 在非Windows下“LazyProc”的Find方法增加互斥锁。  
* 所有libvcl源代码文件编码变更为UTF-8。 	
* TApplication.CreateForm参数变化，详细参考注释。	
* 正式移除标记为丢弃的方法: TApplication.CreateFormFromFile、TApplication.CreateFormFromStream、TApplication.CreateFormFromBytes。	

 ---	
 
 -- res2go --  	
 
* 添加linux和macOS编译配置。  	
* 修改：检查到不支持的组件后直接停止当前文件转换。  	
* 添加检测环境变量“LANG”判断是否为中文系统。  	
* 修复“-outbytes”选项保存时太慢的问题。  	
* 修复没有“-outbytes”选项时不保存gfm文件问题。  	
* 添加新选项“-usestr，默认为true”。  	
* 增加支持共享事件导出（支持多个事件，见res2goTest例程）。  	
* 添加新选项-origfn，生成的.go文件使用原始的delphi/lazarus单元名，默认为false。  	
* 移除“-gui”选项。	
* 修改：“-encrypt”默认为false。	
* 更新res2go二进制，并添加res2go macOS二进制。	

 ---	
 
 ## v1.2.0  	
 	
* 修复liblcl在linux和macOS下在协程中使用vcl.ShowMessage或其它模态窗口时应用程序崩溃问题。bug提交来源于issues #14。  	
* 限制govcl最要低要求go1.9.0；	 
* res2go增加新的选项“-outbytes”。 	
* res2go添加新特性, 私有字段，详见“res2goTest”例子。	
* 修复了xunleidownloader例子中的bug。	
* 多国语言包修改："RegisterLibResouces"的调用移至包内init函数，以后不再需要手动注册了并移除“RegisterLibResouces”函数。	
* “api.DSynchronize”增加互斥锁。防止多个go协程更新造成崩溃问题。	
* res2go说明中增加集成到Delphi/Lazarus IDE的方法。	
* res2go “输入”、“输出”默认目录使用相对路径。	
* 添加新组件：TSpinEdit。并更新stdcontrols例程用于演示新组件。	
* “win”包增加资源相关的api和类型。	
* res2go添加支持“TSpinEdit”组件导出。	
* 增加窗口的消息捕获事件“OnWndProc”。用法例子见“messageTest”。 	
* 添加一个新的“message”包，里面包含windows消息常量（linux、MacOS也可用）和VCL消息常量。用法例子见“messageTest”。 	
* “win”包增加新api"GetModuleFileNameExW"。 	
* 更新windowsProcess和multilanguage例程。	
* 更新go编译约束。 

 ---	
## 更早的日志请查看提交记录  