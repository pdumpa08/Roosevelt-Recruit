import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import RooseveltStudents from '../components/RooseveltStudents';
import Services from '../components/Services';
import Partners from '../components/Partners'


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Partners />
            <Services />
            <RooseveltStudents />
            <Contact />
            <Footer />
        </>

    )
}

export default Home;

