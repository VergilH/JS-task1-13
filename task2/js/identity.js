function getPlayer() {
	//玩家数组
	str = sessionStorage.playerNumber;
    console.log(str);
    playerNumber = JSON.parse(str);
    console.log(playerNumber);
    playerNumber.indexOf(1);
    //水民词汇
	people = sessionStorage.peopleWord;
    peopleWord = JSON.parse(people);
    console.log(peopleWord);
    //杀手词汇
	var killer = sessionStorage.killerWord;
    var killerWord = JSON.parse(killer);
    console.log(killerWord);
}
window.onload = getPlayer();
var imgCheck = document.getElementById("img-check");
var imgWow = document.getElementById("img-wow");
var tip = document.getElementById("tip");
var identity = document.getElementById("identity");
var words = document.getElementById("words");
var btn = document.getElementById("footer_btn");
var btn2 = document.getElementById("footer_btn2");

function nextPage() {
	imgCheck.style.display = "none";
	imgWow.style.display = "block";
	tip.style.display = "block";
	identity.style.display = "block";
	words.style.display = "block";
	btn.style.display = "none";
	btn2.style.display = "block";
}

console.log(playerNumber[nb-1]);

var players = playerNumber.length;
var number = document.getElementById("number");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var role = document.getElementById("role");
var nb = 1;
var index= 0;
number.innerHTML=nb;
number2.innerHTML=nb;
nb++;
number3.innerHTML="隐藏并传递给"+nb+"号";
nb--;
role.innerHTML=playerNumber[index];

function transmit() {
	if (nb<players-1) {
		nb++;
		number.innerHTML=nb;
		number2.innerHTML=nb;
		nb++;
		number3.innerHTML="隐藏并传递给"+nb+"号";
		nb--;
		index++;
		role.innerHTML=playerNumber[index];
	}
	else if (nb=players) {
		number.innerHTML=nb;
		number2.innerHTML=nb;
		nb++;
		number3.innerHTML="法官查看";
		index++;
		role.innerHTML=playerNumber[index];
	}
}

function word() {
	if (role="killer") {
		document.getElementById("vocabulary").innerHTML=killerWord;
	}
}

function nextPlayer() {
	btn.style.display = "block";
	imgCheck.style.display = "block";
	imgWow.style.display = "none";
	tip.style.display = "none";
	identity.style.display = "none";
	words.style.display = "none";
	btn2.style.display = "none";
}