function start(){
	document.getElementById("show").addEventListener("mouseover", function(){change(document.getElementById("show"))}, false);
	document.getElementById("show").addEventListener("mouseout", function(){changeout(document.getElementById("show"))}, false);
}

function change(show){
	show.setAttribute("src", "pic/4-3.jpg");
	document.getElementById("word").innerHTML = "原始圖";
}

function changeout(show){
	show.setAttribute("src", "pic/4-2.jpg");
	document.getElementById("word").innerHTML = "修圖後，使用Lightroom修圖。";
}
  
window.addEventListener("load", start, false);