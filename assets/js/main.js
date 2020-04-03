var i = 0;
var txt = 'Still Ongoing'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */
var boxpomo = document.getElementsByClassName("inner-box");
function typeWriter() {
  
  if (i < txt.length) {
    document.getElementById("pomoheader").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  for (var j=0 ; j < boxpomo.length; j++) {
  		boxpomo[j].classList.remove("show");
  	}

}


window.addEventListener("scroll", myFunction);

function myFunction() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  //var draw = length * scrollpercent;
  
  // Reverse the drawing (when scrolling upwards)
  console.log(scrollpercent);

  if (scrollpercent > 0.8) {
  	
  	for (var j=0 ; j < boxpomo.length; j++) {
  		boxpomo[j].classList.add("show");
  	}
  } else {
   	for (var j=0 ; j < boxpomo.length; j++) {
  		boxpomo[j].classList.remove("show");
  	} 	
  }
}