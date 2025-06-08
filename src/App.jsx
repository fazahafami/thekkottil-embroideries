
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Services from './users/pages/Services'
import Gallery from './users/pages/Gallery'
import Home from './users/pages/Home'
import PagenotFound from './pages/PagenotFound'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'
import Blog from './users/pages/Blog'
import Contact from './users/pages/Contact'
import 'animate.css';

function App() {
  
const [isloading, setIsloading] = useState(false)

useEffect(()=>{
  setTimeout(()=>{
    setIsloading(true)
  },7000)
},[])
  return (
    <>
   
      <Routes>
        <Route path='/' element={isloading? <Home/>:<Preloader/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<PagenotFound/>} />
      </Routes>
   
    </>
  )
}

export default App
