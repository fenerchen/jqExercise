$(function(){
	$('#small-shirt img').mouseover(function(){
		$(this).addClass('hover-border').siblings().removeClass('hover-border');
	})
	$('#small-shirt img').click(function(){
		var alt=$(this).attr('alt');
		// var name=alt+'_small.jpg';
		$('#middle-shirt img').attr({'src':'images/pro_img/'+alt+'_small.jpg','alt':alt});
		// alert($('#middle-shirt img').attr('alt'))
		// alert(alt);
	})
})