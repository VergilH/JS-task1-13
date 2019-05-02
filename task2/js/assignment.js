//获取词汇
var people = document.getElementById("people");
function getWords() {
	var words = people.value;
	console.log(words);
	alert(words);
}
//自动分配人数
var killer = document.getElementById("killer");
var person = document.getElementById("person");
function dstributionNumber() {
	if (needNumber.value<7) {
		killer.value=1;
		person.value=needNumber.value-1;
	}
	else if (needNumber.value>6&&needNumber.value<11) {
		killer.value=2;
		person.value=needNumber.value-2;
	}
	else if (needNumber.value>10&&needNumber.value<15) {
		killer.value=3;
		person.value=needNumber.value-3;
	}
	else if (needNumber.value>14&&needNumber.value<19) {
		killer.value=4;
		person.value=needNumber.value-4;
	}
}
//滑动选择人数
var needNumber = document.getElementById("slider");
var display = document.getElementById("display");
function getNumber() {
	if (needNumber.value>3&&needNumber.value<19) {
		display.value=needNumber.value;
		console.log(display.value);
	}
	else {
		alert("游戏人数为4-18人，请重新输入");
	}
}
window.onload = getNumber();

function wrongNumber() {
	if (display.value<4&&display.value>18) {
		alert("游戏人数为4-18人，请重新输入");
	}
}
//左右增减人数按钮
function increaseBtn() {
	if (needNumber.value<19) {
		needNumber.value++;
		display.value=needNumber.value;
	}
}
function decreaseBtn() {
	if (needNumber.value>3) {
		needNumber.value--;
		display.value=needNumber.value;
	}
}