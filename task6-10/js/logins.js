var name,psd;
var btn = document.getElementById('btn');
var tip = document.getElementById('tip');
btn.onclick = function(){
	name = document.getElementById('user').value;
	psw = document.getElementById('password').value;
	form = document.getElementById('newForm');
	console.log(name);
	console.log(psw);
	console.log(form);
	if (name == null || name == undefined || name == '') {
		alert("请输入用户名");
		return;
	}
	else if (psw == null || psw == undefined || psw == '') {
		alert("请输入密码");
		return;
	}
	//var data = "name=" + name + "&pwd=" + psw;
	//data = 'name='+ name + '&pwd='+ psw;
	//var formData = new FormData(form);
	//formData.append("name", name);
	//formData.append("psw", psw);
	//var user = formData.get("name");
	//var password = formData.get("psw");
	//console.log(formData);
	data = 'name='+ name+ '&pwd='+ psw;

	//var data = "name=" + name + "&pwd=" + password;
	//创建创建Ajax对象
	var newAjax = new XMLHttpRequest();

	//接收数据
	newAjax.onreadystatechange = function(){
		var resdata = JSON.parse(newAjax.responseText);
		console.log(resdata);
  		// 通信成功时，状态值为4
  		if (newAjax.readyState == 4 && newAjax.status == 200){
      		console.log(newAjax.responseText);
      		if (resdata.code == 0) {
      			alert("欢迎进入后台管理！");
      			window.location.href = "http://dev.admin.carrots.ptteng.com/";
      		}
      		else if (resdata.code == -5003) {
      			tip.innerHTML= "用户不存在";
      		}
      		else if (resdata.code == -5004) {
      			tip.innerHTML= "密码错误";
      		}
  		}
	};
	//连接服务器
	newAjax.open('POST', '/carrots-admin-ajax/a/login', true);//HTTP方法、连接地址、同步或异步，true为异步
	newAjax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//发送数据
	newAjax.send(data);
};

//http://dev.admin.carrots.ptteng.com/

/*
//jQuery Ajax
$('#btn').click(function(){
	var data = $('#newForm').serialize();
	$.post({//$.ajax
		//type: "post",请求类型，已缩写
		url:"/carrots-admin-ajax/a/login",//请求地址
		data:data,//提交的数据
		async:true,//是否异步
		dataType: "json",//返回的数据类型
		success: function(resdata){//服务器返回数据
			console.log(resdata);
			console.log(data);
			if (resdata.code == 0) {
      			alert("欢迎进入后台管理！");
      			window.location.href = "http://dev.admin.carrots.ptteng.com/#/dashboard";
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
*/