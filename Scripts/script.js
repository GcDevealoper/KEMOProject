/////////////  Variables //////////
let PatreonInfo=`
<i class="fa-solid fa-bookmark StoreIcon"></i>
<div id="PatreonHead">
	    <img src="./Media/Family.png"></img>
	    <p>A fox and a bunny enter a bar..<br>And now they have a <b>Patreon!</b></p>
	  </div>
	
	<div id="PatreonDesc">
		 <div class="ranks">
		 	<i class="fa-solid fa-bookmark Icon"></i>
			<img src="./Media/rank1.png"></img>
			<div class="rankInfo">
			  <h2>Curious Kemo <i class="fa-solid fa-tags"></i></h2>
			  <h2>3$ - Month</h2>
			  <p>Get peeks at what we are currently drawing, and also peeks at whatever Adoptable we are working on at the moment, you'll also be able to see sketches we won't post anywhere else!</p>
			  <a class="rankButton" target="_BLANK" href="https://www.patreon.com/nanakemo">Subscribe <i class="fa-solid fa-gift"></i></a>
			</div>	
		</div>
			
		<div class="ranks">
			<i class="fa-solid fa-bookmark Icon"></i>
			<img src="./Media/rank2.png"></img>
			<div class="rankInfo">
			  <h2>Fluff Enthusiast <i class="fa-solid fa-tags"></i></h2>
			  <h2>6$ - Month</h2>
			  <p>You'll receive every benefit from the Curious Kemo tier, and you will also get peeks at whatever project we're working on, such as comics, animations or other things, also be able to preorder any Adoptable we work on AND receive discounts on their AB price, and you'll also be able to suggest drawings of any kind, this does not mean we will necessarily draw them, but there will be a higher chance of it happening~</p>
			  <a class="rankButton" target="_BLANK" href="https://www.patreon.com/nanakemo">Subscribe <i class="fa-solid fa-gift"></i></a>
			</div>
		</div>`

let MochiWIP= `
	  <i class="fa-solid fa-bookmark StoreIcon"></i>
	  <div id="MOCHIWIP">
	    <img src="./Media/MochiWIP.png"></img>
	    <p>We are still working here, come back tomorrow and it'll be finished!! <b>Maybe..</b></p>
	  </div>
	  `
	  

let About=`	
	  <i class="fa-solid fa-bookmark StoreIcon" aria-hidden="true"></i>
	  <div id="KEMOAbout">
	    <img src="./Media/Yui.png">
	    <h2 style="align-self: center;letter-spacing: 2px;text-align: center;">What is KEMO?<br><b style="font-size: 20px;/*! font-weight: normal; */">Can we eat it?</b></h2>
		    <p>We are a pair of creative minds trying to bring our ideas into life. At the moment we only make digital art, drawing our characters in many ways and creating new ones for others to enjoy in the form of adoptables. We have a lot of things planned for the future, such as a world where we want to bring our characters into life, creating things such as manga and videogames from it. We also plan to not just stick to drawings, but expand into animation and other types of content creation.</p>
	  </div>
`

///////////////////////////////////
//Funcion para meter contenido al Contenedor principal
let $Pages = document.querySelectorAll('.Page')
let $Container = document.getElementById('Patreon')
$Container.innerHTML = PatreonInfo;


function AnimarSection(section, number){
    section.style.animationName = "Show-up"
    section.style.animationDuration = ".7s"
    section.style.opacity = "0"
    //setAttribute('style', "animation-name:Show-up;animation-duration: 1.5s;animation-iteration-count:initial;")
    section.addEventListener("animationend", ()=> {
      //InsertElements(section)
      replaceContent(number)
      section.style.animationName = "Show-down"
      section.style.animationDuration = ".7s"
      section.style.opacity = "1"
    })
    
}

function eliminarClase(array) {
  for (let i = 0; i < array.length; i++) {
    // Verifica si el elemento actual es un objeto del DOM y tiene la propiedad classList
    if (array[i] instanceof Element && array[i].classList) {
      array[i].classList.remove("Selected");
    }
  }
}

function replaceContent(number){
let Content=[MochiWIP, PatreonInfo, About]
let $Container2 = document.getElementById('Patreon')
$Container2.innerHTML = Content[number]
}

for (let i = 0; i < $Pages.length; i++) {
	$Pages[i].addEventListener("click", function() {
		eliminarClase($Pages)
		//console.log($Pages[i])
		$Pages[i].classList.add('Selected')
		let $Container2 = document.getElementById('Patreon')
		AnimarSection($Container2, i)
		
	})
	                                      
}

//Fin de Funcion para meter contenido al Contenedor principal
////////////////////////////////////////////////////////////////
//Funcion de Reveal
window.addEventListener('scroll', reveal);

function reveal(){

	var reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++){

		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if (revealtop < windowheight - revealpoint){

			reveals[i].classList.add('active');
		}else{

			reveals[i].classList.remove('active');
		}
	}
}
//Fin de la función de Reveal

//Funcion para el Loader
function EraseLoader(){
  const $Loader = document.getElementById('loader')
  setTimeout(()=>{
    $Loader.classList.add('Loaded')
  }, 1500)

  setTimeout(()=>{
    toggleLoadedClass()
  }, 1500)
  
  $Loader.addEventListener("transitionend", ()=>{$Loader.remove()})
}



function toggleLoadedClass() {
    // Obtén el elemento body
    const body = document.body;
    body.classList.add('loaded');
}


document.addEventListener("DOMContentLoaded", ()=>{
    EraseLoader()
    
})
//Fin de funcion del Loader