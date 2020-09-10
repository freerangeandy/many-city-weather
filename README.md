# Many City Weather
This project was created as part of a Mintbean Careerhack (6/24) where the challenge was to make a web app that incorporates a weather forecast API.

## Setup Instructions
This project is made using React.js with Node.js libraries, so after you clone this project to your desktop, you will need to install the requisite libraries. This is done by opening a terminal window, navigating to the root many-city-weather directory, and executing the following command:

`yarn install`

To run the app in development mode, execute the following:

`yarn start`

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage
To see the weather forecast (next 6 hours) for a particular location, begin typing the name of that location in the Search field, and wait for a dropdown to appear with autocompleted results. You must select a result from this dropdown - a location can't be specified solely through the text field.

After selecting a search result, press the (+) Add Location button and a row of hourly forecasts for that location will appear. Since the Search field automatically clears out after a location is added, another location can then be searched for and have its forecast subsequently displayed below any existing forecasts.

By default, the dates and hours shown are for your host system's time zone. To instead view the dates and hours in a location's local time zone, click on the clock button in the upper left corner of the forecast area (click again to toggle back).

To remove any location's forecasts from the visible list, click on the (x) delete button in the area's upper right corner.  

## Credits
This project was built starting from a create-react-app template, [mintbean-challenge-react-starter](https://github.com/clairefro/mintbean-challenge-react-starter), developed by [Claire Froelich](https://github.com/clairefro).

Real-time weather forecast data is provided by the [OpenWeather API](https://openweathermap.org/api/one-call-api).

The Search field uses the [react-mapbox-autocomplete](https://github.com/localvore-today/react-mapbox-autocomplete) component developed by [Localvore.co](https://github.com/localvore-today).
