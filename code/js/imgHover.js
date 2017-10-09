$(function(e) {
    var x = 62;
    var shirt = $('#middle-shirt');
    var shirtSpan = $('#middle-shirt span');
    var offsetx = shirt.offset().left;
    var offsety = shirt.offset().top;

    shirt.hover(function(e) {
            shirtSpan.show('fast');
        },
        function() {
        	shirtSpan.hide();
        }).mousemove(function(e) {
        var left = shirtSpan.position().left;
        var top = shirtSpan.position().top;
        shirtSpan.css('dispaly', 'block');

        if (left >= 187) {
            shirtSpan.css('left', '187px');
            // e.pageX=249;
            console.log(left)
        }
        if (top >= 187) {
            shirtSpan.css('top', '187px');
            // e.pageY=249;

            console.log(top)

        }
        if ((left <= 187 )&& (top <= 187)) {
            shirtSpan.css({
                'top': (e.pageY - offsety - x) + 'px',
                'left': (e.pageX - offsetx - x) + 'px'
            });
        }

    })
})