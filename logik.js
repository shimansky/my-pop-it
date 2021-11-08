var ins = new Audio("popit-in.mp3");
var out = new Audio("popit-out.mp3");
var allPops = document.getElementsByClassName("pop");
var randDigits = Array.from({length: 36}, () => Math.floor(Math.random() * 36));

function pop(thing) {
	if(thing.getAttribute("status")=="pop"){
		thing.style.boxShadow = "0px 0px 19px 18px rgba(34, 60, 80, 0.41) inset";
		thing.style.color = "white";
		thing.setAttribute("status", "it");
		try{
			out.pause();
			ins.pause();
			out.currentTime = 0;
			ins.currentTime = 0;
			}catch{
				console.log(error);
			}
		window.navigator.vibrate(50); 
		ins.play();
	}else{
		thing.style.boxShadow = "0px 0px 19px 2px rgba(34, 60, 80, 0.41) inset";
		thing.style.color = "transparent";
		thing.setAttribute("status", "pop");
		try{
			ins.pause();
			out.pause();
			ins.currentTime = 0;
			out.currentTime = 0;
			}catch{
				console.log(error);
			}
		window.navigator.vibrate(50); 
		out.play();
	}
	
}

function generateRandomMap(){
	for(i=0; i<=allPops.length; i++){
		allPops[i].innerText=randDigits[i];
	}
}

generateRandomMap();