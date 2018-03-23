$(function(){
	
	setInterval(function(){
		var num=$('#num-selected').val();
		var value=200*num;
   		 $('#rmb').text(value);
	},0);

	
})