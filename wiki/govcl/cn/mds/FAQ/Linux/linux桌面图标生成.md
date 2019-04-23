linux桌面图标是一个  xxx.desktop 的文本文件，

格式为(以lazarus的图标为例)，具体的百度找找:  

```ini
[Desktop Entry]
; 名称
Name=Lazarus 

; 注释
Comment=Lazarus IDE  

; 可执行文件可以是  /usr/sbin/xxx   %f 启动参数相当于windows批处理中的 %0  之类的
Exec=startlazarus %f  

; 是否终端，可视界面的填false
Terminal=false 

; 类型，固定吧，没了解过
Type=Application 

; 图标
Icon=lazarus.png  

; 这个应该可以不填，就是应用的分类
Categories=Application;IDE;Development;GTK;GUIDesigner; 

; 这个不太清楚
StartupWMClass=Lazarus 

; mime类型，似乎可不填吧
MimeType=text/x-pascal;text/lazarus-project-source;text/lazarus-project-information;text/lazarus-form;text/lazarus-resource;text/lazarus-package;text/lazarus-package-link;text/lazarus-code-inlay;  

; 关键字，这个不太懂是啥，似乎也不用填
Keywords=editor;Pascal;IDE;FreePascal;fpc;Design;Designer; 

[Property::X-KDE-NativeExtension]
; 这个不知道了。。
Type=QString   

; 这个应该是注册关联的文件类型吧，猜想。。。。
Value=.pas 

; 这个估计也可以省掉吧。没试过
X-Ubuntu-Gettext-Domain=desktop_kdelibs
 

```