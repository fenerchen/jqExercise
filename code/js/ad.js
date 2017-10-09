$(function() {
    var timer = null;
    var index = -1;
    var img = '#content-right-ads>div>img';
    var li = '#content-right-ads>ul>li';
    var len = $(img).length - 1;
    infiniteshow();
    $(li).hover(function() {
        if (timer)//鼠标滑过，清空定时器
            clearInterval(timer);
        index = $(this).index();
        dispaly	(this,img + ':eq(' + index + ')');
    }, function() {
        infiniteshow();
    })
//循环展示
    function infiniteshow() {
        timer = setInterval(function() {
            index++;
            dispaly(li + ':eq(' + index + ')', img + ':eq(' + index + ')');
            if (index === len)
                index = -1;
        }, 2000)
    }
//显示图片，更换导航背景
    function dispaly(obj_li, obj_img) {
        $(obj_li).css('backgroundColor','#0af').siblings().css('backgroundColor','#555');
        $(obj_img).fadeIn(1000).siblings().fadeOut(500);
    }
});