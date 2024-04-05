import './App.css'
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Color Matching Game</h1>
      <p>by React, TypeScript</p>
      <p>@kychancq</p>
      <div className="card">
        <button onClick={() => navigate('./play')}>Play</button>
        <button onClick={() => navigate('./instruction')}>Instructions</button>
        <button onClick={() => navigate('./history')}>History</button>
      </div>
    </>
  )
}

export default App
