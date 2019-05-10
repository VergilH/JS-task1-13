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
//获取词汇
var peopleWord = document.getElementById("peopleWord");
var killerWord = document.getElementById("killerWord");
function getPeopleWords() {
	var pWord = peopleWord.value;
	var pword = JSON.stringify(pWord);
	sessionStorage.peopleWord = pword;
	console.log(pword);
}
function getKillerWords() {
	var kWord = killerWord.value;
	var kword = JSON.stringify(kWord);
	sessionStorage.killerWord = kword;
	console.log(kword);
}
//滑动选择人数
var needNumber = document.getElementById("slider");
var display = document.getElementById("display");
function getNumber() {
	if (needNumber.value>3&&needNumber.value<19) {
		display.value=needNumber.value;
	}
}
window.onload = getNumber();

//人数错误提示
function wrongNumber() {
	if (display.value<4||display.value>18) {
		display.value = needNumber.value;
		alert("游戏人数为4-18人，请重新输入");
	}
	else {
		needNumber.value = display.value;
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

//检查人数分配
function checkNumber() {
	if (killer.value<1 || person.value<1) {
		alert("请分配人数");
	}
}

//创建人数数组
var playerNumber = new Array();

function getKiller(){
	for (var k = 0;killer.value > k;k++) {
		playerNumber.push("killer");
		console.log(playerNumber);
	}
}

function getPerson() {
	for (var p = 0;person.value > p;p++) {
		playerNumber.push("person");
		console.log(playerNumber);
	}
}

//数组乱序
function shuffle(playerNumber) {
    var i, t, temp;
    for (i = playerNumber.length - 1; i > 0; i--) {
        t = Math.floor(Math.random() * (i + 1));
        temp = playerNumber[i];
        playerNumber[i] = playerNumber[t];
        playerNumber[t] = temp;
    }
    console.log(playerNumber);
    var str =JSON.stringify(playerNumber);
    console.log(str);
    sessionStorage.playerNumber = str;
    return str;
};
