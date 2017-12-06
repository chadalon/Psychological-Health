
window.onscroll=function () {
	var header = document.getElementById('header');
	var menu1 = document.getElementById('menu1');
	var menu2 = document.getElementById('menu2');
	var poop = document.getElementById('poop');
	var top = document.getElementById('topguy').style;
	var mid = document.getElementById('midguy').style;
	var bot = document.getElementById('botguy').style;
	var container = document.getElementById('container').style;
	var chad = document.getElementById('chad').style;
	var sidemenu = document.getElementById("sidemenu").style;

	if (document.scrollingElement.scrollTop > 80) {
		header.style.height = "50px";
		menu1.style.paddingTop = "16px";
		menu1.style.paddingBottom = "16px";
		menu2.style.paddingTop = "16px";
		menu2.style.paddingBottom = "16px";
		poop.style.marginTop = "0px";
		top.height = "6px";
		mid.height = "6px";
		bot.height = "6px";
		top.marginTop = "5px";
		mid.marginTop = "5px";
		bot.marginTop = "5px";
		container.paddingTop = "6px"
		chad.marginTop = "16px";
		if (sidemenu.marginTop == "0px") {
			sidemenu.marginTop = "-30px";
		}
	} else {
		header.style.height = "80px";
		menu1.style.paddingTop = "31px";
		menu1.style.paddingBottom = "31px";
		menu2.style.paddingTop = "31px";
		menu2.style.paddingBottom = "31px";
		poop.style.marginTop = "20px";
		top.height = "10px";
		mid.height = "10px";
		bot.height = "10px";
		top.marginTop = "7px";
		mid.marginTop = "7px";
		bot.marginTop = "7px";
		container.paddingTop = "11px";
		chad.marginTop = "31px";
		if (sidemenu.marginTop == "-30px") {
			sidemenu.marginTop = "0px";
		}
	}
	
	
};

function menu() {
	var sidemenu = document.getElementById("sidemenu");
	if (sidemenu.style.marginTop == "-1000px") {
		if (document.scrollingElement.scrollTop > 80) {
			sidemenu.style.marginTop = "-30px";
		} else {
		sidemenu.style.marginTop = "0px";
		}
	} else {
		sidemenu.style.marginTop = "-1000px";
	}
}