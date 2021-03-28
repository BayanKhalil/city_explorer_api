'use strict';


// const _ = require('lodash');

// const arr = [0, 1, false, 2, '', 3];
// console.log(_.compact(arr));

// /////////////////////////////////////////////////////////////////////////

const PORT = 5500;

const express = require('express'); 
// console.log(express);
const cors = require('cors');

const app = express(); 

app.use(cors());
app.get('/location', handleLocation);
app.get('/weather', handleWeather);

function handleLocation(request, response) {
    // get from json file
    // return data
    const getLocation = require('./data/location.json');
    console.log(request.query); // object: { city: 'amman' }
    const city = request.query.city; // amman
    console.log("city---->", city);
    let obj = {
        name: getLocation[0].display_name,
        formatted_query: city,
        city : city,
        latitude: getLocation[0].lat,
        longitude: getLocation[0].lon




    };
    response.send("hello there!!!!");
    response.send(obj);
}


// function handleWeather(request, response) {
//     // get from json file 
//     // return data
//     const data = require('./data/weather.json');
//     const weather = data.nearby_weather;
//     const weatherResponse = [];
//     weather.forEach(item=> {
//         const current = item.weather;
//         weatherResponse.push({
//             restaurant: current.city_name,
//             cuisines: current.cuisines,
//             locality: current.location.locality
//         });
//     });
//     response.send(weatherResponse);
// }

// run it on the port 
app.listen(PORT, ()=> console.log(`App is running on Server on port: ${PORT}`));


