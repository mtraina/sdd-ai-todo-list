import type { Todo } from '../types'

interface TodoListProps {
  todos: Todo[]
  onToggle: (todo: Todo) => void
  onDelete: (id: number) => void
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (!todos || todos.length === 0) return <p>No todos yet</p>

  return (
    <ul className="todo-list">
      {todos.map((t) => (
        <li key={t.id} className={t.completed ? 'done' : ''}>
          <label>
            <input type="checkbox" checked={t.completed} onChange={() => onToggle(t)} />
            <span>{t.title}</span>
          </label>
          <button className="del" onClick={() => onDelete(t.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
