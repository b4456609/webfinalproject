var lightCate = 1;
var lightDir = 1;

function display(){
	lightDirIntro(lightDir);
	document.getElementById("light_1").addEventListener("mouseover", function(){document.getElementById("light_" + lightDir).setAttribute("class", "light");lightDir = 1;document.getElementById("light_" + lightDir).setAttribute("class", "lightt");changePic(lightCate,lightDir);}, false);
	document.getElementById("light_2").addEventListener("mouseover", function(){document.getElementById("light_" + lightDir).setAttribute("class", "light");lightDir = 2;document.getElementById("light_" + lightDir).setAttribute("class", "lightt");changePic(lightCate,lightDir);}, false);
	document.getElementById("light_3").addEventListener("mouseover", function(){document.getElementById("light_" + lightDir).setAttribute("class", "light");lightDir = 3;document.getElementById("light_" + lightDir).setAttribute("class", "lightt");changePic(lightCate,lightDir);}, false);
	document.getElementById("light_4").addEventListener("mouseover", function(){document.getElementById("light_" + lightDir).setAttribute("class", "light");lightDir = 4;document.getElementById("light_" + lightDir).setAttribute("class", "lightt");changePic(lightCate,lightDir);}, false);
	document.getElementById("light_5").addEventListener("mouseover", function(){document.getElementById("light_" + lightDir).setAttribute("class", "light");lightDir = 5;document.getElementById("light_" + lightDir).setAttribute("class", "lightt");changePic(lightCate,lightDir);}, false);
	document.getElementById("light_6").addEventListener("mouseover", function(){document.getElementById("light_" + lightDir).setAttribute("class", "light");lightDir = 6;document.getElementById("light_" + lightDir).setAttribute("class", "lightt");changePic(lightCate,lightDir);}, false);
	document.getElementById("light_7").addEventListener("mouseover", function(){document.getElementById("light_" + lightDir).setAttribute("class", "light");lightDir = 7;document.getElementById("light_" + lightDir).setAttribute("class", "lightt");changePic(lightCate,lightDir);}, false);
	document.getElementById("light_8").addEventListener("mouseover", function(){document.getElementById("light_" + lightDir).setAttribute("class", "light");lightDir = 8;document.getElementById("light_" + lightDir).setAttribute("class", "lightt");changePic(lightCate,lightDir);}, false);
	document.getElementById("button1").addEventListener("click", function(){changeUmb("button1");}, false);
	document.getElementById("button2").addEventListener("click", function(){changeUmb("button2");}, false);
	document.getElementById("button3").addEventListener("click", function(){changeUmb("button3");}, false);	
}
function changePic(lightCate, lightDir){
	document.getElementById("img").setAttribute("src", "pic/" + lightCate + "_" + lightDir +".jpg");
	lightDirIntro(lightDir);
}

function changeUmb(button){
	document.getElementById("button1").setAttribute("class", "btn");
	document.getElementById("button2").setAttribute("class", "btn");
	document.getElementById("button3").setAttribute("class", "btn");
	document.getElementById(button).setAttribute("class", "btn-click");	
	var cate = button.substring(6,7);
	parseInt(cate);
	lightCate = cate;
	changePic(lightCate,lightDir);
}


function lightDirIntro(num){	
	var output;
	if(num == 1){
		output = "<h1>前燈</h1><p>前照明照亮面對攝影師的主體部分。相機的閃光燈前照明的最常見的類型。</p><p>優點：</p><p>通過點亮整個場景提供最多信息到相機上。<br>最簡單的類型光處理照相，因為有更少的陰影，相機的測光表混淆。</p><p>缺點：</p><p>可能會有點沉悶，缺乏的圖片數量和深度。紋理和細節被最小化。場面顯得平坦，幾個人影。</p><p>使用閃光燈拍攝照片，可能會導致非常明亮的學科領域和非常暗的背景，如果背景是閃光範圍之外。</p>"
	}
	if(num == 2 || num == 8){
		output = "<p>結合順光和側光的優點和缺點</p>"
	}
	if(num == 4 || num == 6){
		output = "<p>結合逆光和側光的優點和缺點</p>"
	}
	if(num == 3 || num == 7){	
		output = "<h1>側光</h1><p>當你想強調的質地，尺寸，形狀或圖案的側面照明是完美的。側照明刻畫一個主題，揭示輪廓和紋理。使用側面照明誇大維度和深度。以45度角的一邊，它是最討人喜歡的類型人像燈光之一。</p><p>優點：</p><p>可以單獨被攝體與背景。</br>傳達深度，如在日落景觀。</br>傳達質感，如在風化樹，柵欄，或耕過的田裡。</p><p>缺點：</p><p>可能對某些科目過於嚴重，造成一些地區過於鮮豔，有的認為是太黑了。 （見補充閃光補償。）</p>"
		}
	if(num == 5){
		output = "<h1>背光</h1><p>光來自拍攝對象的背後是目前最棘手的使用，但戲劇性的結果可能是值得的。</p><p>優點：</p><p>通過強調主題，如在輪廓簡化了複雜的場景。</br>提供光在人像一個諂媚的光環。</br>在景觀再添強大的陰影。</p><p>缺點：</p><p>在黑暗的主題缺乏細節。</br>造成鏡頭眩光造成整個畫面對比度低和奇怪的光點。</br>使用曝光補償來克服背光結果過於明亮的背景。</p>"
	}
		
	document.getElementById("lightDirIntro").innerHTML = output;
}

window.addEventListener("load", display, false);