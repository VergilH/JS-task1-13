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

/*function randomNumber() {
	var box = document.getElementsByClassName("magicbox");
	var j = Math.floor(Math.random()*box.length);
	var box = box.splice(j,1);
	var k = Math.floor(Math.random()*box.length);
	var box = box.splice(k,1)
	var l = Math.floor(Math.random()*box.length);
	/*if (j=k) {
		var k = Math.floor(Math.random()*box.length);
	}
	if (j=l) {
		var l = Math.floor(Math.random()*box.length);
	}
	if (l=k) {
		var k = Math.floor(Math.random()*box.length);
	}
	box[j].style.backgroundColor = randomRgbColor();
	box[k].style.backgroundColor = randomRgbColor();
	box[l].style.backgroundColor = randomRgbColor();
}*/

var count=9; 
var originalArray=new Array;//原数组 
//给原数组originalArray赋值 
for (var i=0;i<count;i++){ 
originalArray[i]=i+1; 
} 
var d1=new Date().getTime(); 
originalArray.sort(function(){ return 0.5 - Math.random(); }); 
for (var i=0;i<count;i++){ 
document.write(originalArray[i]+" , "); 
} 
var d2=new Date().getTime(); 
document.write("运算耗时"+(d2-d1)); 



