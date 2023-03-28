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

  var business1 = document.getElementById('Business1');
  var rating1 = document.getElementById('rating1');
  var address = document.getElementById('vicinity1');
  if(data.results[0] === undefined)
  {
    console.log("No businesses in this area. Pick another city to search.");
  }
  else{
  business1.innerHTML = data.results[0].name;
  rating1.innerHTML = "Rating: "+ data.results[0].rating;
  address.innerHTML = data.results[0].vicinity;
  }

  if(data.results[1] === undefined)
  {
    console.log("No more businesses in this area.");
  }
  else
  {
  var business2 = document.getElementById('Business2');
  var rating1 = document.getElementById('rating2');
  var address = document.getElementById('vicinity2');
  business2.innerHTML = data.results[1].name;
  rating1.innerHTML = "Rating: "+data.results[1].rating;
  address.innerHTML = data.results[1].vicinity;
  }
  if(data.results[2] === undefined)
  {
    console.log("No more businesses in this area.")
  }
  else
  {
  var business3 = document.getElementById('Business3');
  var rating1 = document.getElementById('rating3');
  var address = document.getElementById('vicinity3');
  business3.innerHTML = data.results[2].name;
  rating1.innerHTML = "Rating: "+data.results[2].rating;
  address.innerHTML = data.results[2].vicinity;
  }

  if(data.results[3] === undefined)
  {
    console.log("No more businesses in this area.");
  }
  else
  {
  var business4 = document.getElementById('Business4');
  var rating1 = document.getElementById('rating4');
  var address = document.getElementById('vicinity4');
  business4.innerHTML = data.results[3].name;
  rating1.innerHTML = "Rating: "+data.results[3].rating;
  address.innerHTML = data.results[3].vicinity;
  }

  if(data.results[4] === undefined)
  {
    console.log("No more businesses in this area.");
  }
  else
  {
  var business5 = document.getElementById('Business5');
  var rating1 = document.getElementById('rating5');
  var address = document.getElementById('vicinity5');
  business5.innerHTML = data.results[4].name;
  rating1.innerHTML = "Rating: "+data.results[4].rating;
  address.innerHTML = data.results[4].vicinity;
  }
    });
});