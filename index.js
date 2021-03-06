const fastify = require('fastify')({ logger: true })
const getWeatherController = require('./controllers/getWeatherController').getWeatherController


fastify.get('/temp', getWeatherController)


const start = async () => {
    try {
        await fastify.listen(3000)

    } catch (err) {

        fastify.log.error(err)
        process.exit(1)
    }
}
start()