import {
    todos
} from "./lib/db.js"
import {
    relaod
} from "./lib/utils.js"
import {
    User
} from "./lib/User.js"

const tbody = document.querySelector('tbody')
const form = document.querySelector('.todo form')

form.onsubmit = (e) => {
    e.preventDefault()

    const todo = {
        id: crypto.randomUUID(),
        title: new FormData(e.target).get('title'),
        time: new Date().toLocaleDateString(),
        isDone: false
    }

    todos.push(todo)
    reload(todos, User, tbody)
}

reload(todos, User, tbody)