import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuoteController {
    constructor() {
        console.log('quote cont');
        this.getQuotes()
        AppState.on('quotes', this.drawQuotes)
    }




    async getQuotes() {
        try {
            await quoteService.getQuotes()
        } catch (error) {
            console.error(error)
            Pop.toast('couldnt get quotes', error)
        }
    }



    drawQuotes() {
        const quotes = AppState.quotes
        // console.log('quotes ', AppState.quotes.author,);
        setHTML('Quotes', quotes.quotes)
        // setHTML('Quotes', quotes.type)
    }
}