const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f97c28a9emsh643a5fc1c8be7b3p135ab9jsn7a019c7a4ec1',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};



fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=East%20Lansing', options)
	.then(response => response.json())
	.then(response => console.log(response.current.cloud))
	.catch(err => console.error(err));

