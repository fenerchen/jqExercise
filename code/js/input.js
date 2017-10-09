//input框，获得焦点时清空内容；按下enter和点击查询按钮提交输入信息
$(function(){
	$('#search > input').focus(function(){
		$(this).addClass('focus');
		let text_value=$(this).val();
		if(text_value==this.defaultValue){
			$(this).val('');
		}
	})
	.blur(function(){
		$(this).removeClass("focus");
		let text_value=$(this).val();
		if(text_value==''){
			$(this).val(this.defaultValue);
		}
	}).keyup(function(e){
		if(e.which == 13){
			alert('回车提交表单!');
		}
	})
	$('#search-button').click(function(){
		alert('正在查询商品');
	})
})