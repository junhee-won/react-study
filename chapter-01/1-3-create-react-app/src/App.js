import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = () => {
    import('./Todo').then((module) => {
      const { default: Todo } = module
      const position = todos.length + 1
      const newTodo = <Todo key={position} title={`Todo: ${position}`} />
      setTodos([...todos, newTodo])
    })
  }
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos}
    </div>
  );
}

export default App;
