# <Know-A-City>

## Description

Introducing a new app designed to help people find their perfect cup of coffee! With this app, users can easily search for cafes using an intuitive map feature. But that's not all - the app also provides up-to-date weather information for the specified location, ensuring that users can plan their coffee run accordingly. Whether you're a local looking for a new spot or a traveler exploring a new city, this app is the perfect companion for any coffee adventure. 

We built this project because we saw a need for a coffee shop locator app that would not only show users the locations of cafes but also provide them with weather information for the specified location. We wanted to create a tool that would make it easy for coffee lovers to find great cafes and plan their coffee runs around the weather.

During the development of this project, I learned a lot about mobile app development, including how to work with location-based APIs, how to integrate weather APIs, and how to create an intuitive user interface.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1.) Download or clone the project's source code from GitHub to your local machine.
2.) Install a web server to run the application locally.
3.) Open a terminal or command prompt and navigate to the project's root directory.
4.) Start the web server using the appropriate command for the web server you installed. 
5.) Once the server is running, you can access the project in your web browser by navigating to the appropriate URL.

    (This is based on getting it from GitHub. Hopefully in the future we would be able to make a a live server). 
    
Click to see active site.  https://etranchell.github.io/KnowACity/

## Usage

    
Screen shot showing home page with search city button.
![image](https://user-images.githubusercontent.com/123092979/228099781-a6ae89d0-8c7e-485b-b88c-17c5c06a186c.png)

Screen shot showing weather and coffee shops results from the search city button.
![image](https://user-images.githubusercontent.com/123092979/228099846-05ff9e5c-d913-4e0e-9d36-df24646acf37.png)



## Credits

List your collaborators, if any, with links to their GitHub profiles.

"https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap"
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" 

*(The two Links above were used to help us with CSS).

"https://weatherapi-com.p.rapidapi.com/current.json?q=${cityValue}"

*(The link above was used to help us with pulling the weather in a specific location searched). 

"https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="

*(The link above is a proxy server that allows you to bypass Cross-Origin Resource Sharing (CORS) restrictions, and it helped us with that). 

"https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap"

*(The link above is api that we got from google maps for the maps we want to use for locations). 


## License

N/A

---
