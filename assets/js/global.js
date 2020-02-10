/**

 改自layui官网 global.js

*/

layui.define(['code'], function(exports){
  var $ = layui.jquery
  ,layer = layui.layer
  ,device = layui.device()
  ,$body = $('body');


  //阻止IE7以下访问
  if(device.ie && device.ie < 8){
    layer.alert('Layui最低支持ie8，您当前使用的是古老的 IE'+ device.ie + '，你丫的肯定不是程序猿！');
  }

  var home = $('#LAY_home');

  //点击事件
  var events = {
    //联系方式
    contactInfo: function(){
       
    }
  };

  $body.on('click', '*[site-event]', function(){
    var othis = $(this)
    ,attrEvent = othis.attr('site-event');
    events[attrEvent] && events[attrEvent].call(this, othis);
  });

  
  //$('.site-showv').html('1.2.7');
  
  //展示当前版本
  $.get('https://api.github.com/repos/ying32/govcl/releases/latest', function(res){
      $('#getVersion').html(res.tag_name);
	  $('#binDownload').attr("href", res.assets[0].browser_download_url);
	  
    }, 'json');
	
  var getStars = $('#getStars');
  if(getStars[0]){
    $.get('https://api.github.com/repos/ying32/govcl', function(res){
      getStars.html(res.stargazers_count);
    }, 'json');
  }
 
  exports('global', {});
});