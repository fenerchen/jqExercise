$(function() {
	var index;
	var pre_index=$('#activity-introduction>ul>li.bg').index();
	// alert(pre_index);
    $('#activity-introduction>ul>li>a').click(function() {
    	// var t=this;
    	// alert(pre_index)
    	index=$(this).parent().index();
    	// alert(index)
        $(this).parent().addClass('bg').siblings().removeClass('bg');
        $(this).addClass('textcolor').parent().siblings().children().removeClass('textcolor');
        $('#shoes>ul:eq('+pre_index+')').animate({'left':'-790px'},500);
        $('#shoes>ul:eq('+pre_index+')').animate({'left':'790px'},0);
        $('#shoes>ul:eq('+index+')').animate({'left':'0px'},500);
         
         // $('#shoes>ul:eq('+pre_index+')').css('left','790px');
       pre_index=index;

    }) 
    
})