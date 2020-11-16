var video;


window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol=document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume=this.value/100;
	var vol=document.querySelector("#volume").innerHTML=video.volume*100+"%";
	console.log(this.value);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate-=0.1*video.playbackRate;
	console.log("speed is "+video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate+=0.1111111111111111111111111111*video.playbackRate;
	console.log("speed is "+ video.playbackRate)
});

document.querySelector("#mute").addEventListener("click", function() {if(video.volume>0)
	{document.getElementById("mute").innerHTML="unmute";
	 video.volume=0
}   else{document.getElementById("mute").innerHTML="mute";
	     video.volume=1
}

	
});

document.querySelector("#skip").addEventListener("click", function() {if (video.currentTime+5 < video.duration ){
	video.currentTime+=5;
	console.log(video.duration);
	console.log("Current location "+video.currentTime)
}else{video.currentTime=0;
	console.log(video.duration);
	console.log("Current location "+video.currentTime)}
});

document.querySelector("#old").addEventListener("click", function(){
	document.getElementById("myVideo").className = "oldTime";
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").className = "none"
});