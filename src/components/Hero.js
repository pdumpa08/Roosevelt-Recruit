import React from 'react';
import { HashLink } from 'react-router-hash-link';
import NavBar from '../components/Navbar/NavBar';
import testLandingImg from "../images/testLanding.jpg"

const Hero = () => {
    return (
        <>
            <div className="hero relative w-full h-screen flex flex-col" id="hero">
                <NavBar />

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(https://media.gettyimages.com/id/694216918/video/web-designers-at-work.jpg?s=640x640&k=20&c=otudEJcsqSWXj33XQ_MDOWwUDYXKJB37wY5ld7bMQgY=)`,
                        filter: 'brightness(0.6)',
                    }}
                ></div>

                {/* Content */}
                <div className="relative flex flex-col items-center justify-center text-center text-white px-4 py-8 h-full">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Career Experience at Your Fingertips
                    </h1>
                    <p className="text-lg md:text-xl font-medium mb-6">
                        Your future is our business. Get employed today.
                    </p>
                    <HashLink
                        className="bg-orange-700 hover:bg-orange-800 text-white text-lg font-semibold px-12 py-1 rounded-2xl shadow-lg transition duration-300 flex flex-col items-center justify-center"
                        smooth to="/#about"
                    >
                        {/* These are the arrows */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 17l-7 7-7-7"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 3l-7 7-7-7"
                            />
                        </svg>
                    </HashLink>


                </div>
            </div>
        </>
    );
};

export default Hero;
