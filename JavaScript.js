const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f97c28a9emsh643a5fc1c8be7b3p135ab9jsn7a019c7a4ec1',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const form = document.getElementById('userForm');
 const city = document.getElementById('cityname');

 form.addEventListener('submit', function(event) {
	event.preventDefault();

	const cityValue = city.value;
	console.log(cityValue);


fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityValue}`, options)  
.then((response) =>{return response.json();})//returns response object as a JS object
.then((completedData)=>{console.log(completedData);
	var clouds = document.getElementById("cloudy");//sets clouds to innerHTML on the div
	var temp = document.getElementById("temp");
	var feelsLike = document.getElementById("feelsLike");
	var city = document.getElementById("city");
	clouds.innerHTML = completedData.current.condition.text;
	temp.innerHTML = "Temp: "+completedData.current.temp_f+"℉";
	feelsLike.innerHTML = "Feels Like: "+completedData.current.feelslike_f+"℉";
	city.innerHTML = completedData.location.name;})
	  .catch(err => console.error(err));//catches errors
	});
//current
//location