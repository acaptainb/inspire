import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {
    constructor() {
        console.log('weather cont');
        this.getWeathers()
        AppState.on('weather', this.drawWeather)
    }



    async getWeathers() {
        try {
            await weatherService.getWeathers()
        } catch (error) {
            console.error(error)
            Pop.toast('couldnt get weathers', error)
        }
    }

    toggleTemperatureUnit() {
        AppState.weather.isCelcious = !AppState.weather.isCelcious;
        this.drawWeather();
    }

    // drawQuotes() {
    //     const weather = AppState.weather
    //     // console.log('quotes ', AppState.quotes.author,);
    //     // TODO do these calculations in your weather model
    //     const celcius = weather.temperature - 273.15
    //     const fahrenheit = (celcius * 9 / 5) + 32
    //     setHTML('Weather', celcius.toFixed(2))
    //     setHTML('Weather2', fahrenheit.toFixed(2))


    drawWeather() {
        setHTML('here', AppState.weather.TemperatureTemplate)
    }

}
