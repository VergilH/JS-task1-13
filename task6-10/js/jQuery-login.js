$('#btn').click(function(){
	var data = $('#newForm').serialize();//获取的值的格式为input的name + value
	$.ajax({//$.ajax
		type: "post",//请求类型，直接写$.post缩写
		url:"/carrots-admin-ajax/a/login",//请求地址
		data:data,//提交的数据
		async:true,//是否异步,不写的话默认为ture
		//headers:{"Content-Type","application/x-www-form-urlencoded"},
		dataType: "json",//返回的数据类型
		success: function(resdata){//服务器返回数据
			console.log(resdata);
			console.log(data);
			var jsonRes = JSON.stringify(resdata);//将JSON对象转化为JSON字符
			console.log(jsonRes);
			if (resdata.code == 0) {
      			alert("欢迎进入后台管理！");
      			window.location.href = "http://dev.admin.carrots.ptteng.com/";
      		}
      		else if (resdata.code == -5003) {
      			$('#tip').text("用户不存在");
      		}
      		else if (resdata.code == -5004) {
      			$('#tip').text("密码错误");
      		} 
		}
	})
});