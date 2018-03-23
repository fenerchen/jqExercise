$(function(){
	$('#shirt-information ul li').click(function(){
		var index=$(this).index();
		 $(this).children().addClass('textcolor').parent().siblings().removeClass('textcolor');
		 $(this).addClass('bg').siblings().removeClass('bg').children().css('color','#000');

		 $('#introduction div:eq('+index+')').addClass('show').css('textIndent',-index*5+'em').siblings().removeClass('show');
		// alert($(this).index())
	})
})