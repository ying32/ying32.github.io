/*IE兼容  */
// String的两个兼容函数
 
if(navigator.userAgent.indexOf("MSIE") > 0 || navigator.userAgent.indexOf("rv:11.0") > 0) {
    // startsWith
    String.prototype.startsWith=function(str){  
      var reg=new RegExp("^"+str);  
      return reg.test(this);  
    }  
    
    //endsWith
    String.prototype.endsWith=function(str){  
      var reg=new RegExp(str+"$");  
      return reg.test(this);  
    }

}
