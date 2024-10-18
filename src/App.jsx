import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     <Footer />
    </>
  )
}

export default App
