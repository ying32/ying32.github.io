
// by: ying32


function loadRepoInfo() {
    $.get('https://api.github.com/repos/ying32/govcl/releases/latest', function(res){
        $('#btnDownload').attr("href", res.assets[0].browser_download_url);
        $("#versionInfo").html(res.tag_name);
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