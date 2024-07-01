import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"

// @ts-ignore
const SandboxApi = new axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/',
    timeout: 5000
})


class QuoteService {

    async getQuotes() {
        const response = await SandboxApi.get('api/quotes')
        // console.log('getting quotes', response.data);
        const newInspire = new Quote(response.data)
        AppState.quotes = newInspire
        // console.log('App state quotes should be here', newInspire);
    }
}

export const quoteService = new QuoteService