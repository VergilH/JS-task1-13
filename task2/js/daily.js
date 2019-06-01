
function jump() {
	window.location.href="vote.html";
};
var tip = document.getElementsByClassName('tip');
var tipArrow = document.getElementsByClassName('tip_arrow');
//遗言
function lastWords() {
	var blue = getComputedStyle(tip[0],null).backgroundColor;
	console.log(blue);
	if (blue=="rgb(41, 189, 224)") {
		alert("杀手选择被害人");
	}
	else{
		confirm("发表遗言");
		tip[1].style.backgroundColor = '#83b09a';
		tipArrow[1].style.borderLeftColor = '#83b09a';
	}
};
function rec(){
	var blue = getComputedStyle(tip[1],null).backgroundColor;
	console.log(blue);
	if (blue=="rgb(41, 189, 224)") {
		alert("先发表遗言");
	}
	else{
		confirm("玩家发言");
		tip[2].style.backgroundColor = '#83b09a';
		tipArrow[2].style.borderLeftColor = '#83b09a';
	}
};
//jQuery
$(document).ready(function(){
	$("#murder").click(function(){
		$("#murder").css("background-color","#83b09a");
		$(".tip_arrow:first").css("border-left-color","#83b09a");
	});
});

var fsm = new StateMachine({
	init: 'start',
	transitions: [
		{name:'step1', from:'start', to:'step2'},
		{name:'step2', from:'step1', to:'step3'},
		{name:'step3', from:'step2', to:'step4'},
		{name:'setp4', from:'step3', to:'end'}
	],
	methods: {
		onStep1:     function() { console.log('I melted')    },
      	onStep2:   function() { console.log('I froze')     },
      	onStep3: function() { console.log('I vaporized') },
      	onStep4: function() { console.log('I condensed') }
	}
});
console.log(fsm);