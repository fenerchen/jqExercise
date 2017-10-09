$(function() {
    var screen = $('#screen');
    //购物车点击后显示遮罩并居中
    $('#shopping-car').click(function() {
        screen.css('display', 'block');
        $('#screen p').css('display', 'none');
        $('#prompt').css('display', 'block');
        reposition($('#prompt')); //初始化居中
    })
    $('#bigshirttop').css('display', 'none'); //消失图像
    //缩放浏览器仍居中
    $(window).resize(function() {
        reposition($('#prompt'));
    })
    //滑过关闭号是该变样式.点击关闭
    $('#prompt h5 span').hover(function() {
        $(this).css('backgroundPosition', '-301px 2px');
    }, function() {
        $(this).css('backgroundPosition', '-285px 2px');
    }).click(function() {
        screen.css('display', 'none');
        $('#prompt').css('display', 'none');
    })
    //补全文本信息
    setInterval(function() {
        $('#prompt-size').text($('#size-selected').text());
        $('#prompt-color').text($('#color-selected').text());

        $('#prompt-num').text($('#num-selected').val());
        $('#prompt-value').text($('#rmb').text());

    }, 0);


})

function reposition(obj) { // 获取中间位置的边距
    var top = ($(document).height() - obj.height()) / 2;
    var left = ($(document).width() - obj.width()) / 2;
    obj.css({ 'top': top, 'left': left }); //图片居中显示
}