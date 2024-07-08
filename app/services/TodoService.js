import { AppState } from "../AppState.js";
import { Todos } from "../models/Todo.js";

// @ts-ignore
const SandboxApi = new axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/',
    timeout: 5000
})


class TodoService {

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




    //     saveNotes() {
    //         saveState('notes_for_aziz', AppState.todo)
    //     }
    // }

    export const todoService = new TodoService