{{if ne .langDir ""}}
<style>
.goog-te-banner-frame {display: none;}
</style>
**Choose your native language(Google Translate):** <div id="google_translate_element"></div>
{{end}}

## {{.nextTitle}}

## next v2.x.x 

----


## {{.lastRelease}}   

## v2.2.3 

* liblcl: 更新至`Lazarus 2.2.2`版本，[Fixes_for_2.2.2_.28merged.29](https://wiki.lazarus.freepascal.org/Lazarus_2.2_fixes_branch#Fixes_for_2.2.2_.28merged.29)。
* 合并：合并 [#101](https://github.com/ying32/govcl/pull/101)、[#103](https://github.com/ying32/govcl/pull/103)两个请求，并作了相关调整，主要是支持arm64（macOS M1）。
* 增加：新增`TFloatSpinEdit`、`TDirectoryEdit`、`TColorButton`、`TCheckComboBox`组件。
* 修复：修复i18n包错误（感谢群友`Rance`）。
* 优化：调整govcl内部的一些函数名和调用方式。
* 增加：`TDateTimePicker`增加`HideDateTimeParts`、`TimeFormat`属性。
* 增加：`TForm`增加`OnUTF8KeyPress`事件 [#126](https://github.com/ying32/govcl/pull/126)。
* 增加：`TPanel`增加`Canvas`属性和`OnPaint`事件。  
* 增加：`TComboBox`增加`ReadOnly`属性。  
* 修改：macOS要求最低10.10。  
* 修复：重构事件回调功能（需要配合最新的liblcl使用），解决一些效率和有可能再次出现的事件错乱问题。
* 增加：`TFlowPanel`增加`ControlList`及相关的类。
* 增加：一些List类型增加`Exchange`或`Move`。
* 删除：移除一些已定义为`弃用`的类转换函数和`string`、`bool`转换函数。
* 删除：删除`vcl/api/memorydll`包。
* 删除：删除伪类的`ptr`成员。
* 增加：增加清除事件回调，用于解除某些引用，以便于GC可以回收内存。
* 增加：`TImageList`增加一些方法和修改一些参数。
* 增加：`TPageControl`增加一些属性、方法和事件。
* 增加：`TMainMenu`和`TPopuMenu`增加一些属性和事件。
* 修改：重构dll调用，不再依赖`github.com/ying32/dylib`包，并变更导入的API函数调用方式（测试新版本可以在linux下编译通过，也能进入debug模式。注：具体需要多少内存不知道，虚拟机中测试的）。
* 增加：可通过 `-tags hideversion` 隐藏控制台输出的liblcl版本号。
* 增加：`TApplication`添加一些属性和方法。
* 增加：`TImage`添加`OnPaintBackground`、`OnPaint`和`OnPictureChanged`事件。
* 增加：`TClipboard`增加`AddFormat`、`SetFormat`、`GetComponent`、`SetComponent`和`SetComponentAsText`方法。
* 增加：`TCanvas`增加`TryLock`、`Unlock`方法。

----


## v2.2.0 

2022年1月11日   

* liblcl: 更新至`Lazarus 2.2`版本，[Lazarus_2.2.0_release_notes](http://wiki.lazarus.freepascal.org/Lazarus_2.2.0_release_notes)，[Lazarus_2.2_fixes_branch](https://wiki.lazarus.freepascal.org/Lazarus_2.2_fixes_branch)。
* liblcl: 添加`OnPrepareCanvas`事件（[#85](https://github.com/ying32/govcl/issues/85)）。
* liblcl: 为`TTreeNode`添加一些新的方法和事件（[#87](https://github.com/ying32/govcl/issues/87)）。
* liblcl: 修复添加事件未正确更新引用问题。 感谢群友`520`反馈。
* 加载liblcl中的函数不再使用全局变量，因为Go新版本在linux下因为导入太多造成无法编译。
* 修复ListView的`TLVCustomDrawItemEvent`、`TLVCustomDrawSubItemEvent`、`TTVCustomDrawItemEvent`参数类型错误，增加`OnDrawItem`事件。`感谢群友 丰盛辉煌`）    
* 放出`GenlibLCL`工具源码 [genliblcl2](https://gitee.com/ying32/genliblcl2)   


----

## v2.0.10

2021年3月5日   

-- govcl --  

* 限制：要求最小liblcl二进制版为2.0.10。  
* 增加：添加新的WINAPI: SHGetFileInfo及有关的结构和常量。

-- liblcl --  

* 修复：修复`TXButton`字体属性不生效问题。(`感谢群友 520`)
* 修复：修复TDateTime和TDate时间类型数据溢出问题。(`感谢群友 唔歌`) [#61](https://github.com/ying32/govcl/issues/61)  
* 添加：TBitBtn添加ImageIndex和Images属性。（`感谢群友 c2meforyou`）  

-- res2go plugin --    

* 增加：增加go1.16 `go:embed`支持。

----

## v2.0.9

2021年1月6日   

-- govcl --  

* 增加：`TGIFImage`、`TIcon`、`TJPEGImage`、`TPicture`、`TPngImage`、`TBitmap`、`TStringList`、`TStrings`增加`LoadFromBytes`方法，用于简化加载。
* 增加：`TForm`增加被动方法`CreateParams`，用于创建窗体时修改一些窗体信息，例子参见：[createparams](https://github.com/ying32/govcl/tree/master/samples/Windows/createparams)。
* 修复：修复第三库richmemo在Windows下某些值溢出问题。

-- res2go --    

* 移除：正式移除已经标记为弃用的res2go命令行工具源码。


## v2.0.8

2020年11月12日    

-- govcl --  

* 修复：修复`事件id`在某些情况下会冲突，感谢`Qomos`。  
* 增加：`TColorBox`、`TComboBox`、`TDateTimePicker`增加`OnCloseUp`事件。
* 增加：`TRadioGroup`增加`OnSelectionChanged`事件。
* 恢复：恢复之前误删除的某些属性。

-- res2go --    

* 公开：正式对非QQ群员公开[res2go IDE插件源代码](https://github.com/ying32/res2go-ide-plugin)，标志着res2go命令行工具正式废弃使用。 


## v2.0.7

2020年9月30日     

-- govcl --  

* 增加：`TClipboard`导出GetFormat方法。
* 修复：修复`TClipboard.AsText`超大字符串读取产生访问异常。
 

## v2.0.6.2

2020年8月28日   

-- govcl --  

* 增加：vcl包添加全局变量`DEBUG`，默认为`false`，当从资源中构建Form发生错误时可以打印完整堆栈信息。
* 修复：修复liblcl在某些情况下事件的hash冲突，造成事件绑定错乱（感谢群友`ωｈī t é`提供的测试例子）。  


-- res2go --    


## v2.0.6 

2020年8月23日   

-- govcl --  

* 限制：liblcl二进制要求>=2.0.6。
* 添加：新的tag：`finalizerOn`默认不开启，开启后，非组件`Newxxx`之后无需手动调用`Free`（实验性）。
* 删除：`TCanvas`移除`TextRect3`方法，之后改用`TextRect2`替代。
* 修改：`TCanvas`修改`TextRect2`方法参数`text *string`-> `text string`。
* 增加：`TImageButton`支持纵向排列的图片，优化内部绘制。
* 增加：`TClipboard`增加了`FindPictureFormatID`、`FindFormatID`、`GetAsHtml`、`SupportedFormats`、`HasFormatName`、`HasPictureFormat`、`SetAsHtml`，重构了`HasFormat`的实现，并调整了`Formats`的返回类型。
* 增加：`TImageList`增加了`StretchDraw`, `AddSliced`方法。
* 增加：所有继承自`TControl`的添加`AnchorSame`, `ScaleDesignToForm`, `ScaleFormToDesign`, `Scale96ToForm`, `ScaleFormTo96`, `Scale96ToFont`, `ScaleFontTo96`, `ScaleScreenToFont`, `ScaleFontToScreen`, `Scale96ToScreen`, `ScaleScreenTo96`, `AutoAdjustLayout`, `FixDesignFontsPPI`, `ScaleFontsPPI`方法。
* 增加：`TColorDialog`添加`CustomColors`属性。
* 增加：所有继承自`TWinControl`的组件添加`PaintTo`方法。
* 增加：`TForm`与`TFrame`增加`DesignTimePPI`属性。
* 增加：`TListView`添加新的方法：`GetHitTestInfoAt`, `GetItemAt`, `GetNearestItem`, `GetNextItem`，新的属性：`ColumnCount`。
* 增加：`TTreeView`添加新的方法：`GetHitTestInfoAt`。
* 删除：删除`memloaddll`例子及`amd64`下的代码。
* 修改：`listviewvirtualdata`例子，`OwnerData`为true时，Windows下增加模拟`CheckBox`功能。
* 修复：`gdiptest`例子增加绘制一个按钮并响应单击事件演示。
* 调整：调整TGraphic、TJPEGImage、TPngImage、TGIFImage、TBitmap、TIcon的基类为IGraphic。

-- res2go --    

* 增加：新的res2go-IDE插件，目前仅在群里测试，[使用说明](https://gitee.com/ying32/govcl/wikis/pages?sort_id=2645001&doc_id=102420)，后期会逐步废弃res2go命令行工具。

----

## v2.0.5  

2020年7月27日   

-- govcl --  

* 限制：要求最小liblcl二进制版为2.0.5。
* 添加：`TListView`、`TTreeView`、`TListItem`、`TTreeNode`添加一些新的方法和属性。  
* 修复：liblcl：修复`rtl.SysOpen`在Windows下包含中文时打开失败问题（[#42](https://github.com/ying32/govcl/issues/42)）。
* 增加：添加一个simplecalc例子，主要用于另一种自动布局演示。
* 增加：`TListColumn`添加`SortIndicator`属性。
* 增加：`TMemo`添加`Append`方法。
* 删除：移除一些未使用的枚举、事件和类型定义。
* 增加：`TStringGrid`添加更多的属性和方法。演示例子：`grid/stringgrid2`。
* 删除：移除一些未使用的事件。
* 修改：修复一些事件参数不正确问题。
* 添加：`TStrings`和`TStringList`添加新的方法和属性：`AddStrings`, `AddStrings2`, `AddStrings3`, `AddPair`, `AddPair2`, `NameValueSeparator`。
* 添加：`vcl`包添加新的对话框函数：`PasswordBox`, `InputCombo`, `InputComboEx`。 
* 修改：`TStrings`和`TStringList`更改继承自`IStrings`，并修改所有与之相关的参数类型变更为`IStrings`。
* 修改：`TMemoryStream`更改继承自`IStream`，并修改所有与之相关的参数类型变更为`IStream`。
* 增加：`TComboBox`、`TColorBox`、`TDateTimePicker`、`TComboBoxEx`增加`OnDropDown`事件。  
* 增加：`TMonthCalendar`、`TDateTimePicker`添加了一些属性、方法和类型。

-- res2go --    

* 增加：添加一些新的`TStringGrid`事件。
* 增加：支持导出`OnDropDown`事件。
* 删除：删除选项：`outres`、`scale`、`pause`、`usestr`、`encrypt`、`outmain`。



## v2.0.4  

2020年7月10日   

-- govcl --  

* 修改：liblcl：切换至Lazarus 2.0.10版本编译，[Fixes for 2.0.10](https://wiki.lazarus.freepascal.org/Lazarus_2.0_fixes_branch#Fixes_for_2.0.10_.28merged.29) 。
* 限制：要求liblcl二进制版本>=2.0.4
* 修复：修复新添加的组件未注册问题。 
* 修改：`TMovedEvent`事件由3个参数变更为4个参数，添加`isColumn`参数。
* 变更：`TStringGrid`和`TDrawGrid`移除`SetOnColumnMoved`和`SetOnRowMoved`方法，并添加新的方法：`SetOnColRowMoved`
* 修改：更新liblcl事件回调。
* 添加：`TPrinter`添加`SetPrinter`方法。 
* 实现：Linux:Gtk2:TMiniWebview:支持`LoadHTML`和`ExecuteJS`方法。  
* 添加：添加新的包：`pkgs/wintaskbar`；添加新的例子：`windows/taskbar`。
* 修改：liblcl:Windows下使用LCL默认字体。 
* 增加：`vcl`包添加新的函数：`FindControl`,`FindLCLControl`,`FindOwnerControl`,`FindControlAtPosition`,`FindLCLWindow`,`FindDragTarget`。
* 迁移：移动liblcl源代码和makeCHeader工具到新的仓库：https://github.com/ying32/liblcl
* 修改：重命名包名：multilang -> i18n。
* 增加：`TForm`和`TScreen`增加`ActiveControl`属性。
* 增加：`TForm`、`TLabel`、`TStaticText`增加`FocusControl`属性。 
* 修改：`SelectDirectory2`参数变更，因为不再需要兼容Delphi。
* 移除：删除`TSelectDirExtOpt`类型及其枚举值，因为不再需要兼容Delphi。
* 移除：删除`TSelectDirExtOpts`类型，因为不再需要兼容Delphi。     
* 修改：`TTreeView`的折叠箭头使用LCL默认值。
  

-- res2go --    

* 增加：支持更多的事件。


## v2.0.3  

2020年6月22日   

-- govcl --  

* 添加：TTreeView添加`AlphaSort`方法。
* 修复：修复一些枚举常量未导出问题。
* 添加：TRadioButton和TCheckBox添加OnChange事件。  
* 增加：`TMiniWebView`：`ExecuteScript`和`ExecuteJS`方法支持返回值。
* 增加：部分控件添加`Showing`属性。  
* 增加：`win`包中新添加一些Windows API、常量、类型。
* 删除：移除Application.SetFormScaled，使用原生的`Application.SetScaled`。
* 增加：添加Application.Handle和Application.SetHandle，仅Windows有效。
* 增加：添加一些其它接口。
* 增加：增加一个`Windows\nppPlugins`例子，主要测试在第三方程序中使用`govcl`的可行性。  
* 增加：添加一个生成liblcl C语言头文件工具（Tools/makeCHeader），并提供完整的c语言头文件，位于`Tools\makeCHeader\test\liblcl.h`，方便其他支持c的语言调用liblcl。
* 修改：macOS限制目标系统版本为10.8。
* 删除：移除TMessageEventg事件。
* 新增：新增控件：TCheckGroup、TToggleBox。
* 增加：更新liblcl源代码，预添加异常处理机制（未启用，主要是因为考虑到生成的dll文件大小会增加不少）。
* 替换：因为一些其他的原因，决定替换原来的`TGuage`组件内部为一个第三方的`TATGuage`，组件包：[ATFlatControls](https://github.com/Alexey-T/ATFlatControls)。  
* 添加：添加工具`Tools/genbinres`，用于将`liblcl-x.x.x.zip`格式的liblcl预编译二进制生成`github.com/ying32/liblclbinres`包，以便将liblcl打包到可执行文件中。  
* 添加：添加编译约束指令`tempdll`，用于将liblcl打包到可执行文件中，然后运行时释放到临时目录中，[使用说明](https://gitee.com/ying32/govcl/wikis/pages?sort_id=2364531&doc_id=102420)。

-- res2go --    

* 修复：修复在非Windows系统下的控台中显示乱码问题。
* 修复：修复`-scale`选项。
* 增加：支持导出控件：TCheckGroup、TToggleBox。

> 注：res2go工具将不再提供预编译二进制了，可以自行编译，方法参考`Tools\res2go\src`中的`README.md`（不提供的原因：1、编译超简单。2、因为你要用到res2go，就说明你已经安装了Lazarus了，已经具备编译条件了。）。


## v2.0.2

2020年5月15日   

-- govcl --  

* 限制：当前版本限制`liblcl`二进制`最低`版本为`2.0.2`(因为liblcl中有改变)。  
* 添加：尝试添加一个`TRichEdit`组件（一个第三方组件，macOS下动态创建的还有问题，原因不明）。
* 添加：添加一个`richedit`例子。
* 删除：删除`pkgs/skinh`包，及相关例子，因为这个只能在Windows 32bit下使用，还是一个第三方的，效果也不好。
* 添加：补充一些`LCL控件`的属性，主要是原来`Delphi/VCL`控件没有的属性。
* 添加：添加新的组件：`TSelectDirectoryDialog`。
* 添加：添加所有基于`TControl`的控件属性：`AnchorSideLeft`、`AnchorSideTop`、`AnchorSideRight`、`AnchorSideBottom`、`ClientOrigin`、`ChildSizing`、`BorderSpacing`、`AnchorSide`。
* 添加：添加所有基于`TControl`的控件方法：`AnchorToNeighbour`、`AnchorParallel`、`AnchorHorizontalCenterTo`、`AnchorVerticalCenterTo`、`AnchorSame`、`AnchorAsAlign`、`AnchorClient`。
* 删除：移除所有基于`TControl`的控件属性：`Margins`，因为不再需要兼容`Delphi/VCL`了，用`BorderSpacing`属性替代即可。
* 改变：重命名工程`lcl.lpr`到`liblcl.lpr`。
* 添加：`IControl`添加一些属性和方法接口。
* 添加：添加一个`fileshelltree`例子（以树的形式显示当前目录及子目录）。
* 修改：修改导出的函数`DSynchronize`，当前是主线程时则不使用线程同步，而是直接调用。  
* 修改：当copyStr的strLen参数为0时直接返回空字符串(位于api包中)。
* 修复：修复一些控件在设计时状态下绘制不正确。
* 禁用：禁用`Application.CreateForm`的"afterBindSubComponentsEvents"，因为有冲突，感谢`cyanBone`。
* 修复：修复在macOS下因为Lazarus控件`GetTextLen`方法返回错误的长度(似乎返回的是一个Unicode UTF16的长度，正确的应该返回UTF-8的长度，而且只有macOS下才有)，感谢`cyanBone`。 
* 添加：`rtl`包中添加`MainThreadId`和`CurrentThradId`函数。
* 修复：修复`Windows`下`TMiniWebview`边距不正确。  
* 修复：调整并修复在某些情况下字符串内存被释放。


> 本次的更新会造成生成的可执行文件`增加1M`左右。

-- res2go --    


## v2.0.1

2020年5月6日   

* 修复：删除了go.mod文件，修复因为go.mod引起的不能拉取代码问题。

## v2.0.0

2020年4月16日   

-- govcl --  

* 移除：移除`Delphi/VCL`的支持，只专注`Lazarus/LCL`的跨平台方案。    
* 修复：修复一些类的构造函数参数缺失问题。    
* 修改：`vcl.RunApp`支持传入`func()`。    
* 添加：`rtl`包中`intf.go`添加一些与`SendMessage`或者`PostMessage`参数相关的函数。    
* 修复：修复`types`包中的`WPARAM`类型命名错误。    
* 修改：将所有枚举类型的值更改为lcl的。    
* 增加：`TListView`增加`OnDataHint`事件。
* 修改：`liblcl`源码使用`lazarus 2.0.8`编译，相关修复列表：[Lazarus_2.0_fixes_branch](https://wiki.freepascal.org/Lazarus_2.0_fixes_branch#Fixes_for_2.0.8_.28merged.29)。

> 本次的更新会造成生成的可执行文件`减小2.7M`左右。

-- res2go --    

* 增加：增加`TSelectDirectoryDialog`导出。

* 修改：使用lazarus 2.0.8重新编译。

## last-vcl-support分支(last-vcl-support branch)

* 修改：`vcl.RunApp`支持传入`func()`。    
* 添加：`rtl`包中`intf.go`添加一些与`SendMessage`或者`PostMessage`参数相关的函数。    
* 修复：修复`types`包中的`WPARAM`类型命名错误。    


## v1.2.10.2  

2020年3月25日   

-- govcl --  

**最后一个支持`Delphi/VCL`的版本: [last-vcl-support](https://github.com/ying32/govcl/tree/last-vcl-support/)。**  

* 添加：`Colors`包添加`RGB`和`RGBToBGR`函数。 
* 修改：`nswindowTest`例子增加直接使用`objective-c`操作`NSWindow`。  
* 添加：添加一个`winappres/uac`包，默认的资源。
* 添加：`win`包添加`ShellExecuteEx`和`RunAsAdministrator`函数和一些`ShellExecuteEx`所用到的常量和结构。
* 修复：修复`win.ResourceToBytes`的命名错误。
* 修改：当`As<classname>`转换时，不再先分配内存，如果类实例指针为0则返回nil，否则分配内存后再返回。
* 修改：自动绑定事件：过滤首字母不为"A-Z"的字段。

-- res2go --   

## v1.2.10  

2020年3月20日   

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
* 增加：添加`vcl/locales`包及默认的子包`zh_CN`用于本地化一些对话框内的文本(macOS下的有些暂时没办法，因为被写死了，所以不好翻译)。  
* 修改：修改`samples/menu`例子，增加在macOS下的Application菜单中添加项目。  
* 增加：`TBitmap`添加新的属性`TransparentMode`、`AlphaFormat`(仅libvcl)。
* 增加：添加一个`vcl.LclLoaded`函数。
* 增加：`vcl/bitmap`包添加新的函数`ToBitmap2`、`ToGoImage`。
* 增加：`TBitmap`添加`BeginUpdate`、`EndUpdate`和`Clear`方法(仅liblcl有效),`LoadFromDevice`。
* 修改：重构事件中ID的获取（主要是解决以前在某些情况下造成事件关联不对的问题）。
* 添加：所有对象添加`Is`，用于简化对象的判断，如：`button.Is().Control()`。
* 修改：所有对象都添加一个`As<classname>`函数，用于动态转换对象，如：`vcl.AsButton(sender)`。所有对象的`<classname>FromInst`, `<classname>FromObj`, `<classname>FromUnsafePointer`标记为弃用。
* 添加：`TStrings`和`TStringList`添加`S`和`SetS`用于简化原来的`Strings`和`SetStrings`方法。
* 修改：调整自动绑定事件，当不使用资源构TForm或者没有找到对应TForm资源时默认在创建完后绑定子组件事件。 
* 添加：liblcl：`TMiniwebview`初步支持Linux下的gtk3。
* 添加：`THeaderControl`添加`Sections`属性。 
* 添加：添加一些容器控件的`OnAlignPosition`事件，当子控件的`Align`属性为`AlCustom`时会触发父控件的`OnAlignPosition`事件，用法参见`samples/layout`。
* 添加：添加一个`samples/listboxcustomdraw2`，`TListBox`自绘演示。
* 添加：`TCheckListBox`、`TColorListBox`、`TListBox`控件添加`ItemAtPos`、`ItemRect`方法。
* 添加：添加`intfTest`例子，暂时只演示了跨平台的屏幕截图。
* 添加：添加`nswindowTest`例子，测试操作`NSWindow`，并演示一个macOS下的无标题栏样式窗口。
* 添加：添加一些平台相关的接口，比如：linux下获取`GdkWindow`，`GtkWidget`, `X11 Window Id`，macOS下`NSObject`，`NSWindow`。
* 移除：移除`GetGDKWindowXID`函数，改使用`TForm.PlatformWindow().XID()`。 
* 添加：添加一个新的控件`TXButton`，演示例子见`samples/xbuttonTest`。 

> 本次的更新会造成生成的可执行文件增大400+kb左右。

-- res2go --    


## v1.2.9  

2020年3月6日   

-- govcl --  

* 增加：添加新的枚举类型:`TDefaultMonitor`。   
* 增加：`TForm`添加`DefaultMonitor`、`Monitor`属性。   
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

2020年3月3日   

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
* 增加：liblcl：`TFom`添加兼容Delphi的方法`ScaleForPPI`、`ScaleForCurrentDpi`。
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

2020年1月20日   

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

2019年8月21日   

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

2019年7月1日   

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

2019年6月3日  

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

2019年5月13日  

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

2018年12月1日  

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

2018年11月20日    

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

 2018年11月5日  
 	
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
## {{.moreInfo}}   


{{if ne .langDir ""}}
<script>
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage : 'zh-CN',
            autoDisplay : true,
            gaTrack : true,
            layout : google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }
</script> 
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> 
{{end}}