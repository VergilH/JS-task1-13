var user,password;
var btn = document.getElementById('btn');
btn.onclick = function(){
	user = $("#user").val();
	password = $("#password").val();
	console.log(user);
	console.log(password);
	if (user == null || user == undefined || user == '') {
		alert("请输入用户名");
		return;
	}
	else if (password == null || password == undefined || password == '') {
		alert("请输入密码");
		return;
	}
	else {
		alert("欢迎进入后台管理！");
	}
	//var data = "name=" + user + "&pwd=" + password;
	//1、创建创建Ajax对象
	var newAjax = new XMLHttpRequest();

	//4、接收数据
	newAjax.onreadystatechange = function(){
  		// 通信成功时，状态值为4
  		if (newAjax.readyState === 4){
    		if (newAjax.status === 200){
      			console.log(newAjax.responseText);
    		} else {
      			console.error(newAjax.statusText);
    		}
  		}
	};
	//2、连接服务器（打开和服务器的连接）
	newAjax.open('POST', '/a/login', true);//HTTP方法、连接地址、同步或异步，true为异步
	//3、发送数据
	newAjax.send(data);
};



//http://dev.admin.carrots.ptteng.com/