import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Image, } from "../models/Image.js";

// @ts-ignore
const SandboxApi = new axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/',
    timeout: 5000
})



class ImageService {
    async getImage() {
        const response = await SandboxApi.get('api/images')
        // console.log('getting images', response.data);
        const newInspire = new Image(response.data)
        AppState.images = newInspire
        // console.log('appstate images should be here', AppState.images);
    }




    // async getQuotes() {
    //     const response = await SandboxApi.get('api/quotes')
    //     // console.log('getting quotes', response.data);
    //     const newInspire = new Inspire(response.data)
    //     AppState.quotes = newInspire
    //     // console.log('App state quotes should be here', newInspire);
    // }
}

export const inspireService = new ImageService