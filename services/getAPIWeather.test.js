'use strict'

const {getApiWeather} = require('./getAPIWeather')

describe('Logial conection verification', ()=>{
    test('Exec API with result != Undefined',async ()=>{
        let data = await getApiWeather('-33.1236', '-64.3492')
        expect(data).not.toBe(undefined)
    })

    test('Exec API with result  Undefined', async  ()=>{
        let data =  await getApiWeather()
        console.log(data)
        expect(data).toEqual(undefined)
    })
})



