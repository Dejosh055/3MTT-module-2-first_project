import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h2>Count:{count}</h2>
        <button style={{background:'green', height:'52px', padding:'5px', margin:'10px'}} onClick={() => setCount((count) => count + 1)}>
          <h3 style={{fontSize:"16px", color:'white'}}>INCREAMENT</h3>
        </button>

       <button style={{background:'red', height:'52px', padding:'5px'}} onClick={() => setCount((count) => count + 1)}>
          <h3 style={{fontSize:"16px", color:'white'}}>DECREASE</h3>
        </button>
        
       
      </div>
    </>
  )
}

export default App
