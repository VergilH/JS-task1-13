var user,password;
$("#btn").click(function(){
	user = $("#user").val();
	password = $("#password").val();
	console.log(user);
	console.log(password);
	if (user == null || user == undefined || user == '') {
		alert("请输入用户名");
	}
	else if (password == null || password == undefined || password == '') {
		alert("请输入密码");
	}
	else {
		alert("欢迎进入后台管理！");
	}
});