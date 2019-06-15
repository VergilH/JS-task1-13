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

var killer = sessionStorage.getItem("killer");
var person = sessionStorage.getItem("person");

$(document).ready(function(){
	$(".number").addClass("alive");
});

deadPerson = sessionStorage.Arr;
dead = JSON.parse(deadPerson);

$(document).ready(function(){//分辨生死
	if (sessionStorage.getItem("Arr") != null) {
		for (var i = 0;i < dead.length; i++) {
			$(".number:eq("+ dead[i] +")").addClass("dead");
			$(".number:eq("+ dead[i] +")").removeClass("alive");
		}
	}
	else {
		alert("nothing");
	}
});

var personAlive = [];
var killerAlive = [];
$(function(){//找出存活人数
	stillAlive = document.getElementsByClassName("alive");
	for (var i = 0; i < stillAlive.length; i++) {
		console.log(stillAlive[i].innerHTML);
		if (stillAlive[i].innerHTML == "水民") {
			personAlive.push(i);
		} 
		else {
			killerAlive.push(i);
		}
	}
});

//选择目标
$(".icon").click(function(){
	window.icon = $('.icon').index(this);
});
//判断是否选取目标
$("#footerBtn").click(function(){
	if (typeof(icon) == "undefined") {
		alert("先选择某人");
	}
	else if (killerAlive.length==0 || personAlive.length==killerAlive.length) {
		window.location.href="result.html";
	}
	else {
		$(".number:eq("+ icon +")").addClass("dead");
		dead.push(icon);
		window.deadPerson = JSON.stringify(dead);
		sessionStorage.Arr = deadPerson;
		window.location.href="daily.html";
	}
});