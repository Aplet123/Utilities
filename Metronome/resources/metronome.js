var beatCount = document.getElementById("beatCount");
var beat = document.getElementById("beat");
var back = document.getElementById("back");
var next = document.getElementById("next");
var time = document.getElementById("time");
var display = document.getElementById("display");
var metronome = document.getElementsByClassName("metronome")[0];
var start = false;
display.innerHTML=1;
beatCount.innerHTML=beat.value + " bpm";
back.addEventListener("click",function(){if(Number(beat.value)>1){beat.value=Number(beat.value)-1;next.disabled=false;next.className="";}if(beat.value==1){back.disabled=true;back.className="grayOut";}});
next.addEventListener("click",function(){if(Number(beat.value)<200){beat.value=Number(beat.value)+1;back.disabled=false;back.className="";}if(beat.value==200){next.disabled=true;next.className="grayOut";}});
beat.addEventListener("mousemove",function(){beatCount.innerHTML=beat.value + " bpm";});
back.addEventListener("click",function(){beatCount.innerHTML=beat.value + " bpm";});
next.addEventListener("click",function(){beatCount.innerHTML=beat.value + " bpm";});
beat.addEventListener("change",function(){if(start===true){window.clearInterval(window.interval);}});
back.addEventListener("click",function(){if(start===true){window.clearInterval(window.interval);}});
next.addEventListener("click",function(){if(start===true){window.clearInterval(window.interval);}});
time.addEventListener("keypress",function(){if((isNaN(Number(time.value))||Number(time.value)<=0)&&time.value!==""){time.value=1;}if(Number(time.value)%1!==0){time.value=Math.ceil(Number(time.value));}});
var play = function(src,start,end)
{
	var audio = document.createElement("audio");
	audio.src=src;
	audio.currentTime=start;
	audio.autoplay=true;
	document.body.appendChild(audio);
	window.setTimeout(function(){document.body.removeChild(audio);},(end-start)*1000);
};
display.addEventListener("click",function(){if(time.value===""){time.value=4;}if(start===false){start=true;metronome.className="metronome accent";play("http://www.freesfx.co.uk/rx2/mp3s/2/2449_1303610910.mp3",0.5,1);window.interval=window.setInterval(function(){if(Number(display.innerHTML)==time.value){metronome.className="metronome accent";play("http://www.freesfx.co.uk/rx2/mp3s/2/2449_1303610910.mp3",0.5,1);}else{metronome.className="metronome";play("http://www.freesfx.co.uk/rx2/mp3s/2/2449_1303610910.mp3",0,0.5);}display.innerHTML=Number(display.innerHTML)+1;if(display.innerHTML>Number(time.value)){display.innerHTML=1;}},60000/beat.value);}else{metronome.className="metronome";start=false;window.clearInterval(window.interval);}});