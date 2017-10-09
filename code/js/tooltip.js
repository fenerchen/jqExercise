$(function() {
    var x = 10;
    var y = 20;
    var text = '';
    $('#news-act>li').mouseover(function(e) {
        text = $(this).text();
        var tooltip = '<div id="tooltip">' + text + '<\/div>'; //创建链接显示元素
        $('body').append(tooltip); //追加到文档中
        setPosition(e).show('fast');
    }).mouseout(function() {
        $('#tooltip').remove(); //鼠标移出时移除div
    }).mousemove(function(e) {
        setPosition(e);
    });
//设置显示位置
    function setPosition(e) {
        return $('#tooltip').css({
            'top': (e.pageY + y) + 'px',
            'left': (e.pageX + x) + 'px'
        });
    }
});