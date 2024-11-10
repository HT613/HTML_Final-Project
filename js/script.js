function init() {
  // Add your JavaScript between these two lines of code
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 50, lng: 50 }, 
      zoom: 8 
    });
  }

  // Call the function to initialize the map
  initMap();
}

window.addEventListener("load", init);
