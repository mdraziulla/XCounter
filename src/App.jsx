import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = ()=>{
    setCount((count) => count + 1)
  }
  const decrement= ()=>{
    setCount((count) => count - 1)
  }
  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <p>
        Count: {count}
        </p>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
