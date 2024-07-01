import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {
    constructor() {
        console.log('weather cont');
        this.getWeathers()
        AppState.on('weather', this.drawQuotes)
    }



    async getWeathers() {
        try {
            await weatherService.getWeathers()
        } catch (error) {
            console.error(error)
            Pop.toast('couldnt get weathers', error)
        }
    }



    drawQuotes() {
        const weather = AppState.weather
        // console.log('quotes ', AppState.quotes.author,);
        const celcius = weather.temperature - 273.15
        setHTML('Weather', celcius.toFixed(2))
        // console.log('appstate weathers', celcius.toFixed(2));
        // setHTML('Quotes', quotes.type)
    }
}