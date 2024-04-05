import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GameScreen from './screens/GameScreen.tsx'
import InstructionScreen from './screens/InstructionScreen.tsx'
import HistoryScreen from './screens/HistoryScreen.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/' element={<App />}/>
        <Route path='/play' element={<GameScreen />} />
        <Route path='/instruction' element={<InstructionScreen />} />
        <Route path='/history' element={<HistoryScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
