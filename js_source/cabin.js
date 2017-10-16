
$(document).ready(function(){

	var Speed = 20;

	var timer;

	var myDiv = document.getElementById("Marquee");

	var Cut02 = document.getElementById("Cut02");

	Cut02.innerHTML = document.getElementById("Cut01").innerHTML;

	function picMarquee(){

		if(Cut02.offsetWidth - myDiv.scrollLeft <= 0){
			myDiv.scrollLeft = 0;
		}else{
			myDiv.scrollLeft++;
		}
	}

	timer=setInterval(picMarquee,Speed);
	
});	 
