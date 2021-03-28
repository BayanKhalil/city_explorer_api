'use strict';


const _ = require('lodash');

const arr = [0, 1, false, 2, '', 3];
console.log(_.compact(arr));

// /////////////////////////////////////////////////////////////////////////

const PORT = 3000; 
const express = require('express'); 
const cors = require('cors');

const app = express(); 
app.use(cors());
app.get('/location', handleLocation);
app.get('/weather', handleWeather);

function handleLocation(request, response) {
//     // get from json file
//     // return data
    const getLocation = require('./data/location.json');
//     console.log(request.query); // object: { city: 'amman' }
    const city = request.query.city; // amman
    console.log("city---->", city);
    // let obj = {
    //     name: getLocation[0].display_name,
    //     formatted_query: city,
    //     city : city,
    //     latitude: getLocation[0].lat,
    //     longitude: getLocation[0].lon
    const data = arrData[0];

    new Location(request.query.city, data.display_name, data.lat, data.lon);


    };
    response.send("hello there!!!!");
    response.send(obj);
// }

function Location(name, location, latitude, longitude) {
        this.search_query = name,
        this.formatted_query = location,
        this.latitude = latitude,
        this.longitude = longitude
}


app.listen(PORT, ()=> console.log(`App is running on Server on port: ${PORT}`));




