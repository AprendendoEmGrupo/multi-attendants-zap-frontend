import { useEffect, useState } from "react"
import TodoService from "../services/Todo.services"
import { HttpClientAdapter } from "../adapters/HttpClient.adapter"
import { TodoModel } from "../models/Todo.model"

const httpClientAdapter = new HttpClientAdapter()
const todoService = new TodoService(httpClientAdapter)

function App() {
  const [todos, setTodos] = useState<TodoModel[]>([])

  async function loadTodos() {
    const todos = await todoService.getAll()
    setTodos(todos)
  }

  useEffect(() => {
    loadTodos()
  })

  return (
    <>
      <ul>
        { todos.map((todo: TodoModel) => {
          return (
            <li key={todo.id}>{todo.id} | {todo.name} | {todo.hasDone ? "Yes" : "No"}</li>
          )
        })}
      </ul>
    </>
    
  )
}

export default App
