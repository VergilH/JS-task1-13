$('.name').click(function(){//列表伸缩隐藏
	var i = $('.name').index(this);
	console.log(i);
	$(".name:eq("+ i +")").next('li').toggle(100);
});