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
	var getRandomNum = Math.floor(Math.random()*vage.length);
	var num = Math.floor(Math.random()*vage.length);
	var by = Math.floor(Math.random()*vage.length);
	var no = Math.floor(Math.random()*vage.length);
	var newArr = [num,by,no];
	/*var reNewArr = newArr.sort();
	for (var t=0;0<newArr.length;t++) {
		if (reNewArr[t]==reNewArr[t+1]) {
			//alert("有重复"+reNewArr[t]);
		}
	}
	document.write(newArr + "<br>");*/
	//slice无法更新数组
	/*var num = getRandomNum;
	var j = vage.slice(num,num+one);
	//document.write(j + "<br>");
	var by = getRandomNum;
	var k = vage.slice(by,by+one);
	//document.write(k + "<br>");
	var no = getRandomNum;
	var l = vage.slice(no,no+one);
	//document.write(l + "<br>");
	var newArr = [num,by,no]
	box[j].style.backgroundColor = randomRgbColor();
	box[k].style.backgroundColor = randomRgbColor();
	box[l].style.backgroundColor = randomRgbColor();*/
}
//定时器
//参考链接https://blog.csdn.net/YDesire/article/details/81124331
var timer = null;

function start() {
	if (timer = null) {
		clearInterval(timer);
		timer = null;
	}
	timer = setInterval("randomNumber()",1000);
}

function end() {
	clearInterval(timer);
	timer = null;
	for (var n = 0;n < box.length; n++) {
			box[n].style.backgroundColor = "#fbb17f";
	}
}

function f1(){
	var num = Math.floor(Math.random()*box.length);
	var by = Math.floor(Math.random()*box.length);
	var no = Math.floor(Math.random()*box.length);
 	var ary = new Array("11","22","33","111");
 	while (i < box.length) {
		//document.write(i + "<br>");
		ary.push(num);
 		ary.push(by);
 		ary.push(no);
		//document.write(vage + "<br>");
		i++;
	}
 	ary.push(num);
 	ary.push(by);
 	ary.push(no);
	var nary=ary.sort();
	for(var i=0;i<ary.length;i++){
		if (nary[i]==nary[i+1]){
			alert("数组重复内容："+nary[i]);
		}
	}
}
