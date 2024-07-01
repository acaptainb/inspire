
export class Quote {
    constructor(data) {
        this.quotes = data.content
        this.author = data.author
        this.type = data.tags[0]
    }
}
