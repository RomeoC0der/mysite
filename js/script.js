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
 	MenuFlex.id = 'opened';
 	TextOfMenu.style.display = "none";
 	openMenu.style.transform = "rotate(90deg)";
 	MenuFlex.style.animationName = 'MenuAnimate';
 	MenuFlex.style.animationDuration = 1+'s';
 	

 	for(var i = 0; i<Menu.length; i++)
 	{
 		
 		
 	}

 }
 if(isOpen == 1)
 {
 	MenuFlex.id = 'closed';
 	openMenu.style.transform = "rotate(360deg)";
 	TextOfMenu.style.display = "block";
 	
 	for(var i = 0; i<Menu.length; i++)
 	{
 	}
 	b = 2;

 	
 }
////////////////////////
isOpen = isOpen + 1;
	
}




