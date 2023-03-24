const googleMapsApiKey = "AIzaSyDgw_SCqiJ739w3UyCxOTGNQQx2OuiK6vs";
const corsUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
script.async = true;
window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 17,
  });
  const infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
};
getNearestBusiness = () => {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  });
}
document.head.appendChild(script);
navigator.geolocation.getCurrentPosition(position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  fetch(`${corsUrl}${latitude},${longitude}&radius=500&type=restaurant&keyword=business&key=${googleMapsApiKey}`)
    .then(response => response.json())
    .then(data => {

    
      console.log(data);

  //for (let i = 0; i < data.length; i++) {           Switch i back to 0 for results
  
      var business = document.getElementById("Business");
      business.innerHTML = data.results[0].name;
      var rating = document.getElementById('rating');
      rating.innerHTML = data.results[0].rating;
      var vicinity = document.getElementById('vicinity');
      vicinity.innerHTML = data.results[0].vicinity;
    //}
});
});