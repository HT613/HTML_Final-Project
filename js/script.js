function init() {
  // Add your JavaScript between these two lines of code
  async function initMap() {
  // HO CHI MINH CITY
  const position = {lat: 10.82302, lng: 106.62965};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps"); //UnCaught Reference Error, google not defined.
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "132d2c10ae6d07f5", //Unsure if this is correct syntax
  });

  // The marker
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Ho Chi Minh City",
  });
  }
  // Still need to implement extra features and photo slider...
  initMap();
}

window.addEventListener("load", init);
  
// This code is for the photo slider...
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // HOW DO I FIX THIS?? PLEASE HELP!! This is UnCaught Type Error. 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} 
  
  


