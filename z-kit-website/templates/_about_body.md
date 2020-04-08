**不在乎y(ying32)**   

一个迷茫的人，没事写写代码，也不是什么大神。   
学习Go却“跑偏了”，净瞎折腾GUI去了，唉。 
<br />

创建GoVCL（Go Language Visual Component Library）项目也是一时兴起，目的只为解决某些情况下需要一些UI的时候，记得是2017年下半年开始做的，具体几月份记不清了。  

GoVCL从开始到现在都不是为了大型项目准备的，更不是为了需要漂亮的UI而准备的。  

**关于v2.0版本**  

在dev分支中的v2.0版本中已经移除了对`Delphi/VCL`的支持，至于为什么移除有几点：  
 
* 1、一直以来govcl都是由我一个人维护的，所以很多方面精力有限。
* 2、两套代码越往后，差异性越大，需要不停的做兼容和补丁，两边的控件也并不完全相同。 
* 3、Delphi/VCL并不跨平台，而Lazarus/LCL是跨平台的，只好专注于跨平台方案。  
* 4、Delphi是商业化的东西，GoVCL中虽然提供全部的libvcl源码，但二进制还是需要GoVCL用户自己用Delphi编译libvcl源代码，这就涉及到GoVCL用户在使用Delphi编译出来的二进制上面的一些`版权`上的问题，虽然有社区版本替代，但并太过于实用（一般个人倒够用）。

综上以点决定放弃Delphi/VCL方案，这并不是突然的想法，而是去年就有此想法，只是没去实际行动。

<br />

![logo](/assets/images/logo1.png)  

* Github：https://github.com/ying32 
* Gitee：https://gitee.com/ying32 