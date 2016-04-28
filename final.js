

var lightCate = 1;
var lightDir = 1;

var interval = null; // keeps track of the interval
var speed = 1; // determines the speed of the animation
var count = 5; // size of the image during the animation

var pos = 0;
var back = 0;

var keepMove = 1; //background move

function start(){
  move();
}

// background move
function move() {
	if(back == 0)
		++pos;
	else
		--pos;
		
    if (pos > 100) {
      back = 1;
    }
	else if (pos < 0) {
      back = 0;
    }
    document.body.setAttribute("style", "background-size:" + (window.screen.width+ 200) + "px " + (window.screen.height + 200) + "px; background-position:"+ (pos -200) + "px "+ (pos - 200) + "px;");
	//document.getElementById(backIMG).style.backgroundPosition = (pos -200) + "px "+ (pos - 200) + "px;";
	if(keepMove)
		setTimeout(move, 90);
  }
  
	
/*var imageArray = new Array(); // leave as is.

// Specify number of milliseconds between image switches.
var switchMilliseconds = 3000;

// Specify the id of the div or other HTML tag with the 
//   background image to switch.

var divID = 'container';

// To add more images, continue the pattern below.

imageArray[0] = "pic/a.jpg";
imageArray[1] = "pic/b.jpg";
imageArray[2] = "pic/c.jpg";


// No further customization needed in this JavaScript

function publishPicture(i) {
//document.getElementById("container").backgroundImage  = "url(" + imageArray[i] + ")";
//document.body.style.backgroundColor="#f3f3f3";
document.body.style.backgroundImage="url('" + imageArray[i] + "')";
i++;
if( i > (imageArray.length - 1) ) { i = 0; }
setTimeout('publishPicture('+i+')',switchMilliseconds);
}
//publishPicture(0);*/
window.addEventListener("load", start, false);