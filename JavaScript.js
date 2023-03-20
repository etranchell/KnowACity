const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f97c28a9emsh643a5fc1c8be7b3p135ab9jsn7a019c7a4ec1',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=East%20Lansing', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

              
        

    fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyDgw_SCqiJ739w3UyCxOTGNQQx2OuiK6vs&callback=initMap', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        
        var modules = google.maps.modules = {};
        google.maps.__gjsload__ = function(name, text) {
          modules[name] = text;
        };

        window.google = window.google || {};
        google.maps = google.maps || {};
        
    