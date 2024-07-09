export class Weather {
    constructor(data) {
        // TODO add a boolean here that keeps track of which temperature to display (showCelsius)
        // add an onclick that will toggle this boolean
        this.temperature = data.main.temp
        this.isCelcious = true
        this.celsius = ((data.main.temp) - 273).toFixed(1)
        this.fahrenheit = (1.8 * (data.main.temp - 273.15) + 32).toFixed(1)
    }

    get TemperatureTemplate() {
        const temperature = this.isCelcious ? this.fahrenheit : this.celsius;
        const icon = this.isCelcious ? '°F' : '°C';
        return `
    
           <button class="btn "  onclick="app.WeatherController.toggleTemperatureUnit()">
    <h4>${temperature} ${icon}</h4>
  </button>
    `
    }



    // add an HTML template that returns farenheit or celsius based on boolean value
}