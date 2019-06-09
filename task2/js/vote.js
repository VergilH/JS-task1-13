str = sessionStorage.playerNumber;
console.log(str);
playerNumber = JSON.parse(str);
console.log(playerNumber);
playerNumber.indexOf(1);
var player = playerNumber.length;
mainDiv = document.getElementsByClassName('choise-person');
function addChoiseButton() {
	for (var i = 0;i < player;i++) {
		var icon = document.createElement('div');
		icon.className = "icon";
		mainDiv[i].appendChild(icon);
	}
}
window.onload = addChoiseButton(sessionStorage.Arr);

//deadPerson = sessionStorage.Arr;
//var dying = JSON.parse(deadPerson);
if (sessionStorage.getItem("Arr") != null) {
	deadPerson = sessionStorage.Arr;
	dying = JSON.parse(deadPerson);
	dead = [];
	dead = dead.concat(dying);
	for (var i = 0;i < dying.length; i++) {
		$(".number:eq("+ dying[i] +")").addClass("dead");
	}
}
else {
	alert("nothing");
}

console.log();
console.log(dead);
//选择目标
$(".icon").click(function(){
	window.icon = $('.icon').index(this);
});
//判断是否选取目标
$("#footerBtn").click(function(){
	if (typeof(icon) == "undefined") {
		alert("先选择某人");
	} 
	else {
		console.log(icon);
		$(".number:eq("+ icon +")").addClass("dead");
		dead.push(icon);
		window.deadPerson = JSON.stringify(dead);
		sessionStorage.Arr = deadPerson;
		window.location.href="daily.html";
	}
});