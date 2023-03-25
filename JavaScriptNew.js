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
  fetch(`${corsUrl}${latitude},${longitude}&radius=5000&type=cafe&keyword=business&key=${googleMapsApiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

  var business1 = document.getElementById('Business1');
  business1.innerHTML = data.results[0].name;
  var business2 = document.getElementById('Business2');
  business2.innerHTML = data.result[1].name;
  var business3 = document.getElementById('Business3');
  business3.innerHTML = data.result[2].name;
  var business4 = document.getElementById('Business4');
  business4.innerHTML = data.result[3].name;
  var business5 = document.getElementById('Business5');
  business5.innerHTML = data.result[4].name;

    });
});
