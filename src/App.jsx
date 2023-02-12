import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div>
        <nav className="navbar">
          <button>Home</button>
          <button>Settings</button>
          <button>Build</button>
          <button onClick={ () => setIsOpen(true)}>More</button>
        </nav>
      </div>
      <div onClick={() => setIsOpen(false)}
        className= {`overlay ${isOpen? "open" : ""}`}>
      </div>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <h2>Side modal</h2>
        <p>I am some text inside.</p>
      </div>
    </>
  )
}

export default App
