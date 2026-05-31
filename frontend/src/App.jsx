import React, {useEffect, useState} from 'react'
import TodoList from './components/TodoList'

const API = 'http://localhost:8080/api/todos'

export default function App(){
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')

  useEffect(()=>{
    fetch(API).then(r=>r.json()).then(setTodos).catch(()=>setTodos([]))
  },[])

  async function addTodo(e){
    e.preventDefault()
    if(!title.trim()) return
    const res = await fetch(API, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({title, completed:false})})
    const created = await res.json()
    setTodos(prev=>[...prev, created])
    setTitle('')
  }

  async function toggle(todo){
    const updated = {...todo, completed: !todo.completed}
    const res = await fetch(`${API}/${todo.id}`, {method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(updated)})
    if(res.ok){
      setTodos(prev => prev.map(t => t.id === todo.id ? updated : t))
    }
  }

  async function remove(id){
    await fetch(`${API}/${id}`, {method:'DELETE'})
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <form onSubmit={addTodo} className="add-form">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Add todo..." />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos} onToggle={toggle} onDelete={remove} />
    </div>
  )
}
