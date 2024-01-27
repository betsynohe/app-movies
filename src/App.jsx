import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Carrousel from "./components/CarrouselBanner";
import CarrouselCards from "./components/CarrouselCards";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import MoviesTypes from "./components/MoviesTypes";
function App() {
    return (
        <BrowserRouter>
            <NavBar />
            
            <Routes>
                <Route path="/" element={<Carrousel />} />
                <Route
                    path="/novedades"
                    element={
                        <MoviesTypes type="now_playing" titleType="Novedades" />
                    }
                />
                <Route
                    path="/populares"
                    element={
                        <MoviesTypes type="popular" titleType="Populares" />
                    }
                />
                <Route path="/carrouselcards" element={<CarrouselCards />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
