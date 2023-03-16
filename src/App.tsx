import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styles from './text.module.scss'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className={styles.big}>
          count is {count}
        </button>
        <p className='text'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs bg-red-400" >
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
