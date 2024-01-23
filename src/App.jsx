import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Carrousel from './components/CarrouselBanner'
import CarrouselCards from './components/CarrouselCards'
import Footer from './components/Footer'
function App() {

  return (
    <BrowserRouter>
    <NavBar/> 
    <Routes>
    <Route path='/' element={ <Carrousel/> } />
    <Route path='/carrouselcards' element={ <CarrouselCards/> } />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
