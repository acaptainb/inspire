import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class TodoController {
    constructor() {
        console.log('todo cont');
        AppState.on('user', this.getTodo)
        AppState.on('todos', this.drawTodos)
        // this.getTodo()
    }


    async createTodo() {
        try {
            event.preventDefault()
            const form = event.target
            const todoData = getFormData(form)
            console.log('raw todo data', todoData);
            await todoService.createTodo(todoData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.log('failed to create todo', error);
        }
    }


    async getTodo() {
        try {
            await todoService.getTodo()
        } catch (error) {
            Pop.error(error)
            console.log('failed to get a cars');
        }
    }


    drawTodos() {
        const todoListingsElement = document.getElementById('todo-list')

        // if there is no element (we are on a different page)
        if (!todoListingsElement) return

        const cars = AppState.todos
        let innerHTMLString = ''
        cars.forEach((todo) => innerHTMLString += todo.TodoListHTMLTemplate)

        todoListingsElement.innerHTML = innerHTMLString
    }


    async destroyTodo(TodoID) {
        try {

            const wantsToDelete = await Pop.confirm("Are you sure that you want to delete this Note?")

            if (!wantsToDelete) return


            await todoService.DeleteTodo(TodoID)
            Pop.success("Todo was deleted!")
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO DESTROY Todo', error)
        }
    }


    async toggleTask(TodoID) {
        try {
            await todoService.toogleTask(TodoID)
            console.log('is it right', this.toggleTask);
        } catch (error) {
            Pop.error(error)
            console.error('toggle task', error)
        }
    }


    // TODO reference create car from gregslist for create todo
    // TODO reference delete car from gregslist for delete todo
    // TODO reference get my apods from nasa lecture for getting todos
    // TODO reference toggle prepared spell from spellbook for completing todo
    // TODO reference spellbook prepared spell count for uncompleted todos

}