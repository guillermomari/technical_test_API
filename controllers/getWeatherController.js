require('dotenv').config();
const fastify = require('fastify')({ logger: true })
const getApiWeatherService = require('../services/getAPIWeather').getApiWeather

async function getWeatherController(request, reply) {


    let {
        lat, lon
    } = request.query

    if (lat === undefined && lon === undefined) {
        lat = "-33.1236"
        lon = "-64.3492"
    }

    let temp;

    try {
        let res = await getApiWeatherService(lat, lon)

        let tempCentigrade = res.data.current.temp


        if (tempCentigrade < process.env.TEMP_FILTER) {
            temp = true
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset = utf-8')
                .send({
                    message: 'The temperature is lower than filter temperature', temp 
                })

        }
        else if (tempCentigrade > process.env.TEMP_FILTER) {
            temp = true
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset = utf-8')
                .send({
                    message: 'The temperature  is higher than filter temperature', temp
                })

        }

        else {
            temp = false
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset = utf-8')
                .send({
                    message: 'The temperature in Rio IV is not higher or lower than filter temperature', temp
                })
        }




    }
    catch (err) {
        
        reply
        .code(err.errorcode)
        .header('Content-Type', 'application/json; charset = utf-8')
        .send({
            message: err.message
        })
        
    }


}

module.exports = {
    getWeatherController
}


