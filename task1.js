var box = document.getElementsByClassName("magicbox");

var boxLength = box.length;
//点击按钮开始闪修改magicbox样式

//function changeBox() {
//}

//重置magicbox默认样式
function resetBox() {
	var x = document.getElementsByClassName("magicbox");
	x[0].style.backgroundColor = "#fbb17f";
}

function randomRgbColor() { //随机生成RGB颜色
	var rgb='rgb('+Math.floor(Math.random()*255) + ","
	+Math.floor(Math.random()*255) + ","
	+Math.floor(Math.random()*255) +')';
	console.log('rgb');
	return rgb;
}

var bgc = randomRgbColor();

function randomNumber() {
	var someNumber;
	box[j].style.backgroundColor = randomRgbColor();
	box[k].style.backgroundColor = randomRgbColor();
	box[l].style.backgroundColor = randomRgbColor();
}

function myFunction(){
	var fruits = ["0","1", "2", "3", "4", "5"];
	var num1 = Math.floor(Math.random()*6);
	fruits.splice(num1,1);
	document.write(fruits);
	var fruits = fruits;
	var num2 = Math.floor(Math.random()*5);
	fruits.splice(num2,1);
	document.write(fruits);
	var fruits = fruits;
	var num3 = Math.floor(Math.random()*4);
	fruits.splice(num3,1);
	document.write(fruits);
	var fruits = fruits;
	var x=document.getElementById("demo");
	//x.innerHTML=num;
}


