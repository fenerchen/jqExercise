$(function() {
    var screen = $('#screen');
    var bigshirttop = $('#bigshirttop');

    $('#look').click(function() {

        var name = $('#middle-shirt img').attr('alt');
        var bigshirtsrc = 'images/pro_img/' + name + '_big.jpg';
        // alert(name)
        screen.css('display', 'block').click(function() {
            $(this).hide(); //任一点击后图片和遮罩消失
            bigshirttop.hide();
        });
        $('#showshirt p').css('display', 'block');
        bigshirttop.css('display', 'block').attr('src', bigshirtsrc); //显示图片
        reposition(bigshirttop); //初始化居中
        $(window).keyup(function(e) {
            if (e.which == 27) {
                screen.hide();
            };
        }).resize(function() {
            reposition(bigshirttop);
        })
    })

    function reposition(obj) { // 获取中间位置的边距
        var top = ($(document).height() - obj.height()) / 2;
        var left = ($(document).width() - obj.width()) / 2;
        obj.css({ 'top': top, 'left': left }); //图片居中显示
    }
})