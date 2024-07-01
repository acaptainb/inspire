import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";

// @ts-ignore
const SandboxApi = new axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/',
    timeout: 5000
})


class WeatherService {

    async getWeathers() {
        const response = await SandboxApi.get('api/weather')
        // console.log('getting weather', response.data);
        const newInspire = new Weather(response.data)
        AppState.weather = newInspire
        // console.log('App state quotes should be here', newInspire);
    }
}

export const weatherService = new WeatherService