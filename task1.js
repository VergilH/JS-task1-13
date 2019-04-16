var box = document.getElementsByClassName("magicbox");

var boxLength = box.length;
//点击按钮开始闪修改magicbox样式

function randomRgbColor() { //随机生成RGB颜色
	var rgb='rgb('+Math.floor(Math.random()*255) + ","
	+Math.floor(Math.random()*255) + ","
	+Math.floor(Math.random()*255) +')';
	console.log('rgb');
	return rgb;
}

function randomNumber() {
	var box = document.getElementsByClassName("magicbox");
	for (var n = 0;n < box.length; n++) {
		box[n].style.backgroundColor = "#fbb17f";
	}
	var i = 1;
	var vage = ["0"];
	while (i < box.length) {
		//document.write(i + "<br>");
		vage.push(i);
		//document.write(vage + "<br>");
		i++;
	}
	var one = 1;
	//slice无法更新数组
	var num = Math.floor(Math.random()*vage.length);
	var j = vage.slice(num,num+one);
	document.write(j + "<br>");
	var by = Math.floor(Math.random()*vage.length);
	var k = vage.slice(by,by+one);
	document.write(k + "<br>");
	var no = Math.floor(Math.random()*vage.length);
	var l = vage.slice(no,no+one);
	document.write(l + "<br>");
	box[j].style.backgroundColor = randomRgbColor();
	box[k].style.backgroundColor = randomRgbColor();
	box[l].style.backgroundColor = randomRgbColor();
}

//var timeTravel = setInterval("randomNumber()",1000);

function time() {
	var timeTravel = setInterval("randomNumber()",1000);
}

function resetTime() {
	clearInterval(timeTravel);
	for (var n = 0;n < box.length; n++) {
		box[n].style.backgroundColor = "#fbb17f";
	}
}


