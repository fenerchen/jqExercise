$(function(){
	$('#change-color span').click(function(){
			 changeSkin(this.id);
	});
	var cookie_skin=$.cookie('cssSkin');
	if(cookie_skin){
		changeSkin(cookie_skin);
	}

});
function changeSkin(skinName){
	$('#'+skinName).addClass('selected')//当前span元素选中
					 .siblings().removeClass('selected');//去掉其他同辈元素的选中状态
		$('#colorfile').attr('href','css/'+skinName+'.css');//更换皮肤
		$.cookie('cssSkin',skinName,{psth:'/',expires:10});
}