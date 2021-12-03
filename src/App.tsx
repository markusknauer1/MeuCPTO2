import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SideBar } from './components/SideBar/Index'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
