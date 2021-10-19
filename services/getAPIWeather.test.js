'use strict'

const {getApiWeather} = require('./getAPIWeather')

describe('Verificacion de logica', ()=>{
    test('ejecutar con alguna logica la API', ()=>{
        let data =  getApiWeather('-33.1236', '-64.3492')
        expect(data).not.toBe(undefined)
    })
})



