import { generateId } from "../utils/GenerateId.js";

export class Todos {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.completed = data.completed
    }
}