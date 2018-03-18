/*Navigation list for mobile devices*/
var navDisplay = "block";
var openNav = document.getElementsByClassName('nav-option1');
var hamburger = document.getElementById('hamburger');
hamburger.addEventListener("click",change);
hamburger.addEventListener("click",hamburgerClick);



function hamburgerClick(){
	if(navDisplay=="block"){
		for(var i=0;i<openNav.length;i++){
		openNav[i].style.display = navDisplay;}
		navDisplay="none";
		document.querySelector(".navigation-mobile").classList.toggle("active");
	}
	else{
		for(var i=0;i<openNav.length;i++){
		openNav[i].style.display = navDisplay;}
		navDisplay="block";
		document.querySelector(".navigation-mobile").classList.toggle("active");
	}
}

function change(){
	for(var i=0;i<openNav.length;i++){
		openNav[i].style.animationDelay=100*(i)+"ms";
	}
}


