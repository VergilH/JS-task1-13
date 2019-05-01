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
display.value=needNumber.value;
function getNumber() {
	if (needNumber.value>3&&needNumber.value<19) {
		display.value=needNumber.value;
		console.log(display.value);
	}
	else {
		alert("undefind");
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

var elem = document.querySelector('input[type="range"]');
    var rangeValue = function(){
        var newValue = elem.value;
        var target = document.getElementById("slider");
        target.innerHTML = newValue;
    };
    elem.addEventListener("input", rangeValue);

    if (navigator.userAgent.toLowerCase().match(/chrome\/([\d.]+)/)) {
      $range.style.background = 'linear-gradient(to right, #a100ff, #a100ff ' + percent + '%, #f0f0f0 ' + percent + '%)';
    }