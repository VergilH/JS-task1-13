deadPerson = sessionStorage.Arr;
var dead = JSON.parse(deadPerson);
console.log(dead[3]+1);

var people = sessionStorage.peopleWord;
var peopleWord = JSON.parse(people);
var killer = sessionStorage.killerWord;
var killerWord = JSON.parse(killer);

str = sessionStorage.playerNumber;
console.log(str);
playerNumber = JSON.parse(str);

var killer = sessionStorage.getItem("killer");
var person = sessionStorage.getItem("person");

var j = 0;
var k = 1;
//动态日期
$(document).ready(function(){
	for (var i = -1; i < dead.length; i=i+2) {
		$("#content").append("<content><p class=deepblack>第1天</p><p class=frenchgrey>0小时07分</p><br><div class=content-middle><p class=tag></p><br><p class=tag></p></div></content>");
		$("#content").append("<div class=greyborder></div>")
		$(".kW").text("杀手词汇："+ killerWord );
		$(".pW").text("水民词汇："+ peopleWord );
		$(".killer").text("杀手"+ killer +"人");
		$(".person").text("水民"+ person +"人");
		if (dead[j] == undefined) {
			break;
		}
		else {
			window.deadNum = dead[j]+1;
			$(".tag:eq("+ j +")").text("黑夜:"+ deadNum + "号被杀手杀死,真实身份是" + playerNumber[j]);
		}
		j++;
		if (dead[j] == undefined) {
			break;
		}
		else {
			window.deadNum = dead[j]+1;
			$(".tag:eq("+ j +")").text("白天:"+ deadNum + "号被全民投死,真实身份是" + playerNumber[j]);
		}
		j++;
	}
});