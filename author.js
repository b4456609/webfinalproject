var lightCate = 1;
var lightDir = 1;

function display(){
	lightDirIntro(lightCate, lightDir);
	document.getElementById("light_1").addEventListener("mouseover", function(){lightDir = 1;changePic(lightCate,lightDir);}, false);
	document.getElementById("light_2").addEventListener("mouseover", function(){lightDir = 2;changePic(lightCate,lightDir);}, false);
	document.getElementById("light_3").addEventListener("mouseover", function(){lightDir = 3;changePic(lightCate,lightDir);}, false);
	document.getElementById("light_4").addEventListener("mouseover", function(){lightDir = 4;changePic(lightCate,lightDir);}, false);

	document.getElementById("button1").addEventListener("click", function(){changeUmb("button1");}, false);
	document.getElementById("button2").addEventListener("click", function(){changeUmb("button2");}, false);

}
function changePic(lightCate, lightDir){
	document.getElementById("img").setAttribute("src", "pics/" + lightCate + "_" + lightDir +".jpg");
	lightDirIntro(lightCate, lightDir);
}

function changeUmb(button){
	document.getElementById("button1").setAttribute("class", "btn");
	document.getElementById("button2").setAttribute("class", "btn");
	document.getElementById(button).setAttribute("class", "btn-click");	
	var cate = button.substring(6,7);
	parseInt(cate);
	lightCate = cate;
	changePic(lightCate,lightDir);
}


function lightDirIntro(lightCate, num){	
	var output;
	if(lightCate == 1){
		if(num == 1){
			output = "<h1>基本資料</h1><p>姓名: 鄧皓</p><p>系級: 資工2A</p><p>學號: 00157033</p><p>興趣: 打電動 耍廢</p><p>性向: 正常</p>"
		}
		if(num == 2 || num == 8){
			output = "<h1>此次專題分工</h1><p>網站CSS</br>作者規劃</br></p>"
		}
		if(num == 3 || num == 6){
			output = "<h1>此次專題心得</h1><p>這次的專題主題”攝影”，主要是我的另一名組員 范振原的專長，因此最後也選擇這一個發展性多的主題來製作與發揮。</p><p>經由這一次的專題，我除了再一次練習了這學期網路程式設計的技巧，也間接了解了不少攝影方面的知識，可為一舉兩得。</p><p>這次我最感謝的是我的夥伴 阿原范振原，他做了許多工作也教了我許多，很高興有這次的機會能和他一起合作。</p>"
		}
		if(num == 4 || num == 7){	
			output = "<h1>本學期心得</h1><p>這學期前陣子有點不太適應，導致在課堂或作業上遇到不少的困難，還好最後在同學 助教的幫助下辛苦的熬過來了。</p><p>我相信身為資工系的一份子，擁有html css等網路程式語言的能力是必須的，無論是未來的工作或生活都可能會有應用的機會，這堂課著實令我獲益良多。</p>"
			}
	}
	else{
		if(num == 1){
			output = "<h1>基本資料</h1><p>姓名: 范振原</p><p>系級: 資工2A</p><p>學號: 00157016</p><p>興趣: 攝影、自行車</p><p>性向: 正常</p>"
		}
		if(num == 2 || num == 8){
			output = "<h1>此次專題分工</h1><p>網站規劃內容規劃</br>HTML</br>javascript</p>"
		}
		if(num == 3 || num == 6){
			output = "<h1>此次專題心得</h1><p>做一個網站要花很多時間。</p><p>經由這一次的專題，讓我更熟悉javascript技巧。</p><p>團結力量大，還好有隊友幫忙，才能如期完成</p>"
		}
		if(num == 4 || num == 7){	
			output = "<h1>本學期心得</h1><p>這一學期下來學到很多很好玩的網頁內容。</p><p>有些程式語言的觀念對以後學更進階的內容應該會更輕鬆。</p>"
			}
	}		
	document.getElementById("lightDirIntro").innerHTML = output;
}

window.addEventListener("load", display, false);