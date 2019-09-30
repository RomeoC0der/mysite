let modalWindow = document.querySelector('.modal-window');
let podkladka = document.querySelector('.podKLADka');
let closeButton = document.querySelector('.close');


 let timeOut = 13000;
let timerToOut = setTimeout(showModal, timeOut);


function showModal(){
modalWindow.style.display = "flex";
podkladka.style.display = "block";
var i = setTimeout(function(){
modalWindow.style.opacity = "1";
podkladka.style.opacity = "1";
}, 400);

}

podkladka.onclick = function(){
	modalWindow.style.opacity = "0";
	document.cookie = "closed=1";
	podkladka.style.opacity = "0";
	
	var i = setTimeout(function(){
		modalWindow.style.display = "none";
podkladka.style.display = "none";
}, 500);

}
closeButton.onclick = function(){
	modalWindow.style.opacity = "0";
	document.cookie = "closed=1";
	podkladka.style.opacity = "0";
	
	var i = setTimeout(function(){
		modalWindow.style.display = "none";
podkladka.style.display = "none";
}, 500);

}

 