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
window.onload = addChoiseButton();

function jump() {
	window.location.href="daily.html";
}

var fsm = StateMachine(	{
	init:newState,
    transitions: [
        {name:"kill",from:"start",to:"killed"},
        {name:"tell",from:"killed",to:"told"},
        {name:"speak",from:"told",to:"spoke"},
        {name:"vote",from:"spoke",to:"voted"}
    ],

    methods: {
        onKill:function () {
            $(".kill").css({backgroundColor:"#2375af"});
            $(".triLeft1").css({borderColor:"transparent #2375af transparent transparent"});
            // $(".kill").addClass("over1");
            // $(".triLeft1").addClass("over2");//思路二
        },
        onTell:function () {
            $(".tell").css({backgroundColor:"#2375af"});
            $(".triLeft2").css({borderColor:"transparent #2375af transparent transparent"});
            // $(".tell").addClass("over1");
            // $(".triLeft2").addClass("over2");//思路二
        },
        onSpeak:function () {
            $(".speak").css({backgroundColor:"#2375af"});
            $(".triLeft3").css({borderColor:"transparent #2375af transparent transparent"});
        },
        onVote:function () {
            $(".vote").css({backgroundColor:"#2375af"});
            $(".triLeft4").css({borderColor:"transparent #2375af transparent transparent"});
        }
    }

});

switch (fsm.state){
    case "killed" :
        fsm.onKill();
        aboutKill();
        break;
    case "told":
        fsm.onKill();
        fsm.onSpeak();
        break;
    case "spoke":
        fsm.onKill();
        fsm.onTell();
        fsm.onSpeak();
        break;
    case "voted":
        fsm.onKill();
        fsm.onTell();
        fsm.onSpeak();
        fsm.onVote();
        abuotVote ();
        aboutKill();
}