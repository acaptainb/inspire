import { AppState } from "../AppState.js";
import { inspireService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ImageController {
    constructor() {
        console.log('controller looaded');
        this.getImage()
        AppState.on('images', this.drawImages)
        // AppState.on('quotes', this.drawQuotes)
        // this.getQuotes()
        setInterval(this.drawClock, 1000)
    }



    async getImage() {
        try {
            await inspireService.getImage()
        } catch (error) {
            console.error(error)
            Pop.toast('couldnt get images', error)
        }
    }


    // async getQuotes() {
    //     try {
    //         await inspireService.getQuotes()
    //     } catch (error) {
    //         console.error(error)
    //         Pop.toast('couldnt get quotes', error)
    //     }
    // }

    drawClock() {
        let clock = AppState.clock
        // console.log(new Date().toLocaleString('en-us', { hour: '2-digit', minute: '2-digit', second: 'numeric' }));
        clock = new Date().toLocaleString('en-us', { hour: '2-digit', minute: '2-digit', second: 'numeric' })
        setHTML('Time', clock)
    }

    // drawQuotes() {
    //     const quotes = AppState.quotes
    //     console.log('quotes ',);
    //     setHTML('Quotes', quotes)
    // }



    drawImages() {
        const image = AppState.images
        // let imageHTML = `${image.ImageDate}`
        // setHTML('imageDate', imageHTML)
        document.body.style.backgroundImage = `url(${image.ImgUrl})`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.objectFit = 'cover'
    }
}