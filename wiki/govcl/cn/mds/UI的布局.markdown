Delphi(Lazarus)中可视控件的布局大多数都默认的是绝对定位，没有像QT那种横向，竖向的布局思想。  

所有的可视控件都拥有一个Align属性，用来自动调整控件大小的，可以说是Delphi的一种布局方式吧。更多请前往例程中的"layout"查看。   

与控件位置大小相关的方法有Left、SetLeft、Top、SetTop、Width、SetWidth、Height、SetHeight、SetBounds、ClientRect。

* Align  

Align是一个枚举值，在go中我按Delphi中的定义为：  
```go
// 见 types 包
const (
	AlNone = iota + 0   // 不进行自动调整, 大多数控件默认值
	AlTop               // 居于顶部， 仅SetHeight有效
	AlBottom            // 居于底部， 仅SetHeight有效
	AlLeft              // 居于左边， 仅SetWidth有效
	AlRight             // 居于右边， 仅SetWidth有效
	AlClient            // 填充客户区域，无法手动调整控件大小
	AlCustom            // 自定义，这个很少用
)
```  
使用时直接调用Control.SetAlign(types.AlTop)，即可使用控件居于父控件的顶部，并自动调整Top, Left, Right的值。  


* Margins(仅限Windows，libvcl)  

Margins是一个对象，有Left、Top、 Right、 Bottom属性，但这个属性必须当
AlignWithMargins为True时才生效，默认的情况下AlignWithMargins为False即不使用此属性  
设置。  


* Anchors  

Anchors属性为一个集合类型，有akLeft, akTop, akRight, akBottom，可多选，一般默认的为akLeft, akTop。他的作用是，比如一个Button当Align设置为alNone时，我想这个控件居于右边  
并且不想改变控件的大小，这时可以将其设置为akTop, akRight。当父窗口尺寸发生变化时会自动
调整到设计模式的位置。   

 

### 使用TPanel进行布局

一般情况下布局方面都选择使用TPanel作为布局的容器，比如说想实现一个“上-左-客户区”的布局，这里就需要2-3个TPanel，这里使用3个TPanel来演示，将3个TPanel的Align属性分别设置为alLeft, alTop, alClient就可实现。注意控件的创建顺序哦，详情看例程中的“layout”。  


### 其他小提示
* 如果是要做跨平台，在一般情况可考虑 liblcl + Lazarus设计，这样可以保证每个平台都一致。  
* 单一Windows平台可考虑libvcl + Delphi设计。  
