import React from 'react';
import { Router } from 'react-router-dom';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
    return(
    <>
        <HeroSection/>
        <Cards/>
    </>
    );
}

export default Home;