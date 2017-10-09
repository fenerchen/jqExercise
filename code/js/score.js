$(function() {
	var flag=0;
    var img = $('#score-img');
    img.hover(function(e) {
        showstar(e);
    }, function() {
    	if(flag){
    	}else{
        img.css('top', '0px');
    	}
    }).mousemove(function(e) {
        showstar(e);
    }).click(function(e) {
    	flag=1;
        var s=showstar(e);
        alert('您给此商品的评分是：'+s+'分');
    })

    function showstar(e) {
        var dis = e.pageX - img.offset().left;
        if (dis < 16) {
            img.css('top', '-16px');
            return 1;
        } else if (dis < 32) {
            img.css('top', '-32px');
            return 2;
        } else if (dis < 48) {
            img.css('top', '-48px');
            return 3;
        } else if (dis < 64) {
            img.css('top', '-64px');
            return 4;
        } else if (dis < 80) {
            img.css('top', '-80px');
            return 5;
        }
    }
})