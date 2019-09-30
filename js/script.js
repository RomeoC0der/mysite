let openMenu = document.querySelector('#last');
let TextOfMenu = document.querySelector('.span');
let Menu = document.querySelectorAll('.nav-menu-a');
let MenuFlex = document.querySelector('.header-nav-div');
var isOpen = 0;
var b = 0;
let old_screen = 0;
openMenu.onclick = function(){
isOpen = isOpen - b;
if(isOpen < 0)
{
	isOpen = 1;
}
///////////////////////
 if(isOpen == 0)
 {
 	TextOfMenu.style.display = "none";
 	openMenu.style.transform = "rotate(90deg)";
 	MenuFlex.style.flexDirection = "column";
 	MenuFlex.style.justifyContent = "flex-start";
 	MenuFlex.style.alignContent = "center";
 	MenuFlex.style.alignItems = "center";
 	MenuFlex.style.height = 55 + 'vh';
 	MenuFlex.style.width = 100 + 'vw';
 	MenuFlex.style.animationName = 'MenuAnimate';
 	MenuFlex.style.animationDuration = 1+'s';

 	for(var i = 0; i<Menu.length; i++)
 	{
 		Menu[i].style.display = "block";
 		Menu[i].style.marginTop = 3 + 'vh';
 	}

 }
 if(isOpen == 1)
 {
 	openMenu.style.transform = "rotate(360deg)";
 	TextOfMenu.style.display = "block";
 	MenuFlex.style.flexDirection = "row";
 	MenuFlex.style.width = 100 + '%';
 	MenuFlex.style.height = 'auto';
 	Menu[0].style.marginTop = '0';
 	MenuFlex.style.justifyContent = 'flex-start';
 	MenuFlex.style.alignContent = 'center';
 	MenuFlex.style.alignItems = 'center';
 	for(var i = 0; i<Menu.length; i++)
 	{
 		Menu[i].style.display = "none";
 	}
 	b = 2;

 	
 }
////////////////////////
isOpen = isOpen + 1;
	
}


let slide = document.querySelector('.slidePlace');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let counter = 0;
let width = 0;
let pogr = 6;
let allPogr = pogr * slides.length;
let balance = 0;
let time = 5000;
let timer = setInterval(autoSlide, time);
let buttons_down = document.querySelectorAll('.flexbtns');
let buttons_counter = 0;

function autoSlide(){
	buttons_down[buttons_counter].id = 'non-active';
	buttons_counter++;
	if(buttons_counter + 1 >  buttons_down.length)
	{
		buttons_counter = 0;
	}
		buttons_down[buttons_counter].id = 'active';
width = slides[counter].width;
balance = balance + width + pogr;
counter++;
if(counter + 1  > slides.length)
{
	counter = 0;
	balance = 0;
}


slider.style.marginLeft = -balance + 'px';



}

for(i = 0; i < buttons_down.length; i++)
{
	buttons_down[i].onclick = function(){
		
		clearInterval(timer);
		timer = setInterval(autoSlide, time);
	}
}
buttons_down[0].onclick = function()
{
	
	slider.style.marginLeft = 0 + 'px';
	clearInterval(timer);
		timer = setInterval(autoSlide, time);
buttons_down[0].id = 'not-active';
		buttons_down[1].id = 'not-active';
		buttons_down[2].id = 'not-active';
		buttons_down[3].id = 'not-active';
		this.id = 'active';
		balance = 0;
		buttons_counter = 0;
counter = 0;
	balance = 0;
}
buttons_down[1].onclick = function()
{
	slider.style.marginLeft = -slides[0].width   + 'px';
	buttons_down[0].id = 'not-active';
		buttons_down[1].id = 'not-active';
		buttons_down[2].id = 'not-active';
		buttons_down[3].id = 'not-active';
		this.id = 'active';
	clearInterval(timer);
		timer = setInterval(autoSlide, time);
		balance = slides[1].width + pogr * 2;
		buttons_counter = 1;
counter = 1;

		
}
buttons_down[2].onclick = function()
{
slider.style.marginLeft = -slides[0].width + -slides[1].width  + 'px';
	buttons_down[0].id = 'not-active';
		buttons_down[1].id = 'not-active';
		buttons_down[2].id = 'not-active';
		buttons_down[3].id = 'not-active';
		this.id = 'active';
	clearInterval(timer);
		timer = setInterval(autoSlide, time);
		balance = slides[1].width + slides[2].width + pogr * 3;
		buttons_counter = 2;
counter = 2;

		
}
buttons_down[3].onclick = function()
{
	slider.style.marginLeft = -slides[0].width + -slides[1].width + -slides[2].width + 'px';
	buttons_down[0].id = 'not-active';
		buttons_down[1].id = 'not-active';
		buttons_down[2].id = 'not-active';
		buttons_down[3].id = 'not-active';
		this.id = 'active';
	clearInterval(timer);
		timer = setInterval(autoSlide, time);
		balance = slides[1].width + slides[2].width + slides[3].width + 32;
		buttons_counter = 3;
counter = 3;
}


