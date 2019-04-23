不使用delphi的二进制也是可以的，在\bin\liblcl.dll目录中存放着相应的lcl库二进制。  
按照加载规则，优先加载libvcl库，没有找到时就会去加载liblcl.dll。 

 **当使用LCL组件库时会造成部分组件、属性、方法、事件失效。** 