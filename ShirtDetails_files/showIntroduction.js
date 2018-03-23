$(function(){
	$('#header-bottom>ul li').hover(function(){
		// $('#'+this.className).show(1000);
		// $('#'+this.className).hide();
		// $('#'+this.className).fadeIn(1000);
		$('#'+this.className).slideDown(500);
	},function(){
		// $('#'+this.className).fadeOut(500);
		$('#'+this.className).slideUp(500);
	})
})