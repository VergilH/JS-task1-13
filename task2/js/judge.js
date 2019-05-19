//玩家数组
str = sessionStorage.playerNumber;
console.log(str);
playerNumber = JSON.parse(str);
console.log(playerNumber);
playerNumber.indexOf(1);
//水民词汇
var people = sessionStorage.peopleWord;
var peopleWord = JSON.parse(people);
console.log(peopleWord);
//杀手词汇
var killer = sessionStorage.killerWord;
var killerWord = JSON.parse(killer);
console.log(killerWord);
//创建玩家选择框
var main = document.getElementById('name');
var player = playerNumber.length;
console.log(player);
console.log(playerNumber[0]);
function addDiv() {
	for (var i = 0;i < player;i++) {
		var div = document.createElement('div');
		div.className = "choise-person";
		main.appendChild(div);
	}
}
//创建玩家名称编号
mainDiv = document.getElementsByClassName('choise-person');
console.log(mainDiv);
function addPlayer() {
	for (var i = 0;i < player;i++) {
		var number = document.createElement('div');
		number.className = "number";
		mainDiv[i].appendChild(number);
		number.innerHTML = playerNumber[i];
		var name = document.createElement('div');
		name.className = "name";
		mainDiv[i].appendChild(name);
		name.innerHTML = i+1;
	}
}
window.onload = addDiv(),addPlayer();

/*1
*23
*45
*/