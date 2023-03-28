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

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

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

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

1.) Search functionality: Users can search for cafes using maps and get weather information for a specific location.

2.) Location-based recommendations: The app can recommend cafes based on the user's current location or a location they specify.

3.) Map integration: The app can integrate with Google Maps or another mapping service to show the user the location of nearby cafes.

4.) Weather integration: The app can integrate with a weather API to provide current weather conditions, as well as hourly and daily forecasts.

5.) User reviews and ratings: The app can display user reviews and ratings of cafes, allowing users to make informed decisions about where to go.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.