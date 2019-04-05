function (){
	//rgb function
	function getRandomColor(){
		var rgb='rgb('+Math.floor(Math.random()*255) + ","
		 +Math.floor(Math.random()*255) + ","
		 +Math.floor(Math.random()*255) +')';
		 console.log('rgb');
		 return rgb;
	}
	//btn
	var btn_one=document.querySelector("#btn_one");
	var Divs=document.querySelector(".rgb")
	btn_one.onclick=function(){
		for (var i = 0; i<Divs.length; i++) {
			Divs[i].style.backgroundColor=getRandomColor();
		}
	};
}