require('dotenv').config();
const axios = require('axios')

const fastify = require('fastify')({ logger: true })

async function getApiWeather(lat, lon) {

    let urlApi = "https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + lat + "&lon=" + lon + "&appid=" + process.env.APPI_KEY+"&units=metric"
    
    try {
        return await axios.get(urlApi)

    } catch (err) {
        
        fastify.log.error({
            errorcode: err.response.status,
            message: err.response.statusText
        })
    }

}

module.exports = {
    getApiWeather
}