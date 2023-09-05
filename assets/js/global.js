
// by: ying32


function loadRepoInfo() {
    $.get('https://api.github.com/repos/ying32/govcl/releases/latest', function(res){
		// https://github.com/ying32/govcl/releases/download/v2.2.3/liblcl-2.2.3.zip
		for(var i=0;i<res.assets.length;i++){
			if(res.assets[i].name.indexOf("liblcl") != -1){
				$('#btnDownload').attr("href", res.assets[i].browser_download_url);
				break;
			}		
		}
        
        $("#versionInfo").html(res.tag_name);
		//if(res.assets.length > 1)
        //    $("#btnDownloadUIDesigner").attr("href", res.assets[1].browser_download_url);
		//else
		//	$("#btnDownloadUIDesigner").attr("href", "javascript:alert('No designer is available');");
		$("#btnDownloadUIDesigner").attr("href", "https://github.com/ying32/govcl/releases/download/v2.2.3/GoVCLDesigner-win-1.2.0.zip");
    }, 'json');

    $.get('https://api.github.com/repos/ying32/govcl', function(res){
        $('#repstar').html(res.stargazers_count);
        $('#repfork').html(res.forks_count);
        $('#lastupdate').html(res.pushed_at.substring(0, 10));

    }, 'json');

    <!-- alert(navigator.language||navigator.userLanguage); -->
}

function setShowQQGroupQrCode() {
    var qqgroup = $("#qq_group");
    qqgroup.hover(function(){
        var qrcode = $("#qq_group_qrcode");
        qrcode.fadeIn(500);
        qrcode.css("z-index",200);

        qrcode.css("left", qqgroup.offset().left + (qqgroup.width()  - qrcode.width()) / 2);
        qrcode.css("top", 60);
    },function(){
        $("#qq_group_qrcode").fadeOut(0);
        $("#qq_group_qrcode").css("z-index",50);
    });
}