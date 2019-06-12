var deadPerson = sessionStorage.Arr;
var dead = JSON.parse(deadPerson);
console.log(dead.length);
var fre = sessionStorage.getItem('step');//开始状态
console.log(fre);

var murder = document.getElementById("murder");

if (fre=="step1") {
	var data = 'step1';
}
else {
	var data = 'start';
}
console.log(data);
var fsm = new StateMachine({
	init: data,
	transitions: [
		{name:'murder', from:'start', to:'step1'},
		{name:'lastWord', from:'step1', to:'step2'},
		{name:'discuss', from:'step2', to:'step3'},
		{name:'vote', from:'step3', to:'step4'}
	],
	methods: {
		onEnterStep1: function() {
			//localStorage.setItem(fsm,'state');
			//console.log(window.localStorage);
			sessionStorage.setItem('step','step1');
			$("#murder").css("background-color","#83b09a");
			$(".tip_arrow:first").css("border-left-color","#83b09a");
			console.log(dead[0]);
			window.deadMan = dead[0] + 1;
			console.log(deadMan);
			console.log(playerNumber[dead[0]]);
			$("#murder").after("<p class=deadInfo></p>");
			$("p:eq(3)").html(deadMan + "号被杀手杀死，真实身份是" + playerNumber[dead[0]]);
			$(".sun").css("top","106px");
		},
		onEnterStep2: function() {
			$("#lastWord").css("background-color","#83b09a");
			$("#lastWord .tip_arrow").css("border-left-color","#83b09a");
		},
		onEnterStep3: function() {
			$("#discuss").css("background-color","#83b09a");
			$("#discuss .tip_arrow").css("border-left-color","#83b09a");
		},
		onEnterStep4: function() {
			$("#vote").css("background-color","#83b09a");
			$("#vote .tip_arrow").css("border-left-color","#83b09a");
			window.sessionStorage.removeItem('step');
		}
	}
});
murder.onclick = function() {
	switch(fsm.state) {
		case "start":
		window.location.href="vote.html";
		fsm.murder();
		break;
		default:
		alert("已经杀过人了,亡灵开始发表遗言");
	}
	console.log(fsm.state);
}
lastWord.onclick = function() {
	switch(fsm.state) {
		case "start":
		alert("杀手还未杀人");
		break;
		case "step1":
		var i = confirm("亡灵发表遗言");
		if (i == true) {
			fsm.lastWord();
		} 
		else {
			alert("开始发表遗言吧!");
		}
		break;
		default:
		alert("已经发表遗言了，开始讨论吧");
	}
	console.log(fsm.state);
}
discuss.onclick = function() {
	switch(fsm.state) {
		case "start":
		alert("杀手还未杀人");
		break;
		case "step1":
		alert("亡灵还未发表遗言");
		break;
		case "step2":
		i = confirm("玩家发言");
		if (i == true) {
			fsm.discuss();
		} 
		else {
			alert("开始进行讨论吧!");
		}
		break;
		default:
		alert("已经讨论过了，开始投票吧");
	}
	console.log(fsm.state);
}
vote.onclick = function() {
	switch(fsm.state) {
		case "start":
		alert("杀手还未杀人");
		break;
		case "step1":
		alert("亡灵还未发表遗言");
		break;
		case "step2":
		alert("玩家还未讨论");
		break;
		case "step3":
		alert("开始进行投票");
		fsm.vote();
		window.location.href="vote.html";
		break;
		default:
		alert("???")
	}
	console.log(fsm.state);
}