$(function(){
	$('#shirt-color img').click(function(){
		var alt=$(this).attr('alt');
		$(this).parent().addClass('bordercolor').siblings().removeClass('bordercolor');
		$('#color-selected').text(alt);
		if(alt=='蓝白'){
			// $('#middle-shirt img').attr({'src':'images/pro_img/blue_one_small.jpg','alt':'bule_one'});
			// $('#blue').addClass('show').siblings().removeClass('show');
			change($('#blue'),'blue');

		}else if(alt=='黄色'){
			// $('#middle-shirt img').attr({'src':'images/pro_img/yellow_one_small.jpg','alt':'yellow_one'});
			// $('#yellow').addClass('show').siblings().removeClass('show');
			change($('#yellow'),'yellow');

		}else if(alt=='绿色'){
			// $('#middle-shirt img').attr({'src':'images/pro_img/green_one_small.jpg','alt':'green_one'});
			// $('#greenshirt').addClass('show').siblings().removeClass('show');
			change($('#greenshirt'),'green');
		}
	})
	//点击小图标的颜色，更换衬衫的颜色
	function change(obj ,s){
		$('#middle-shirt img').attr({'src':'images/pro_img/'+s+'_one_small.jpg','alt':s+'_one'});
			obj.addClass('show').siblings().removeClass('show');
	}
})