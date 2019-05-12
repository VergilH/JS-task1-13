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
//
var main = document.getElementById('name');
var div = document.createElement("div");
var player;

div.className = "choise-person";

function addDiv() {
	for (var i = 0;i < playerNumber;i++) {
		main.appendChild(div);
	}
}
widows.onload = addDiv();