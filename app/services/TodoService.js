import { AppState } from "../AppState.js";
import { Todos } from "../models/Todo.js";
import { api } from "./AxiosService.js";


// TODO make sure you import the api axios instance from the axios service, and use that for your network requests
class TodoService {

    async createTodo(todoData) {
        const response = await api.post('api/todos', todoData)
        console.log('new todo created', response.data);
        const NewTodo = new Todos(response.data)

        AppState.todos.push(NewTodo)
    }

    async toogleTask(TodoID) {
        const todoIndex = AppState.todos.find((todo) => todo.id == TodoID)
        if (!todoIndex) {
            throw new Error('id bad')
        }
        todoIndex.completed = !todoIndex.completed
        const response = await api.put(`api/todos/${TodoID}`)
        // AppState.todos.splice = (todoIndex,1)
    }


    async getTodo() {
        const response = await api.get('api/todos')
        console.log('sevice get todolist');
        const newTodos = response.data.map((todoPojo) => new Todos(todoPojo))
        AppState.todos = newTodos
    }

    async DeleteTodo(TodoID) {
        const response = await api.delete(`api/todos/${TodoID}`)
        console.log('delete', response.data);
        const todoIndex = AppState.todos.findIndex((todo) => todo.id == TodoID)
        console.log('todoindex', todoIndex);

        // if (todoIndex == -1) throw new Error('find index is not working')
        // AppState.todos.splice(todoIndex, 1)
    }

    //     async getWeathers() {
    //         const response = await SandboxApi.get('api/todos')
    //         console.log('getting todo list', response.data);
    //         const newInspire = new Todos(response.data)
    //         AppState.todo = newInspire
    //         // console.log('App state todolist should be here', newInspire);
    //     }

    //     createNote(todoData) {
    //         console.log('note services', todoData);
    //         const newNote = new Notes(todoData)
    //         console.log('new Note', newNote);
    //         AppState.notes.push(newNote)
    //         // console.log(AppState.notes);
    //         //     AppState.notes = [...AppState.notes, newNote]

    //         this.saveNotes()
    //     }



    //     createNoteList(NoteList) {
    //         const noteLists = AppState.todo
    //         const newNoteLists = new Notes(NoteList)
    //         noteLists.push(newNoteLists)
    //         // this.saveNoteLsts
    //     }




}

export const todoService = new TodoService()