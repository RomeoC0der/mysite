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


