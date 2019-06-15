str = sessionStorage.playerNumber;
console.log(str);
playerNumber = JSON.parse(str);


deadPerson = sessionStorage.Arr;
var dead = JSON.parse(deadPerson);
console.log(dead.length);

//动态日期
$(document).ready(function(){
	for (var i = -1; i < dead.length; i=i+2) {
		$("main").append("<div class=date>第一天<div class=down_arrow></div></div>");
		$("main").append("<div class=content><div class=sideline><div class=moon></div><div class=sun></div></div><div class=tips><div class=tip murder><div class=tip_arrow></div><p>杀手杀人</p></div><p class=deadInfo></p><div class=tip id=lastWord><div class=tip_arrow></div><p>亡灵发表遗言</p></div><div class=tip id=discuss><div class=tip_arrow></div><p>玩家依次发言</p></div><div class=tip id=vote><div class=tip_arrow></div><p>全民投票</p></div></div></div>")
		$(".content").css("display","none");
		$(".content").last().css("display","block");
	}
});

var tip = document.getElementsByClassName('tip');
var tipArrow = document.getElementsByClassName('tip_arrow');
//遗言
//window.localStorage.getItem(fsm,'state');
//console.log(window.localStorage);

var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.type= 'text/javascript'; 
script.src= 'js/new-state-machine.js';
head.appendChild(script); 