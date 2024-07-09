import { generateId } from "../utils/GenerateId.js";

export class Todos {
  constructor(data) {
    this.id = generateId()
    this.name = data.description
    this.completed = data.completed || false
  }

  get TodoListHTMLTemplate() {
    return `
    <div class="form-check">
  <input class="form-check-input" type="checkbox" ${this.completed ? 'checked' : ''} id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    ${this.name}
  </label>
    <button onclick="app.TodoController.destroyTodo('${this.id}')" class="bg-danger "><i class="mdi mdi-delete"></i></button>
</div>

    `
  }


  // TODO reference spellbook for checkbox
}