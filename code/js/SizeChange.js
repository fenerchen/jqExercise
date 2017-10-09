$(function(){
	$('#size-change li').click(function(){
		var text=$(this).text();
		$(this).addClass('changebg').siblings().removeClass('changebg');
		$('#size-selected').text(text);

	})
})