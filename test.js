'use strict'
require('dotenv').config();
const { inject } = require('light-my-request')

//TEST FOR API CONECTION FOR WEATHER
const { getApiWeather } = require('./services/getAPIWeather')

const test = async () => {
    //TESTING WITH CORDOBA'S CORDENATES

    let lat =  "-31.417"
    let lon =  "-64.183" 

    inject(getApiWeather,{
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + lat + "&lon=" + lon + "&appid=" + process.env.APPI_KEY + "&units=metric",
        
        headers: { "Content-Type": "application/jon" }
    })
        .then(response => {
            response = getApiWeather(lat, lon)
            console.log('status code: ', response.status)
            console.log('message: ', response.statusText)

        })



}

test()