import React from 'react';
import { Link } from 'react-router-dom';
import Microsoft from '../images/Microsoft.png';
import Stanford from '../images/Stanford.png';
import UOC from '../images/University-of-California-logo.png';
import Spotify from '../images/Spotify.png';

const Portfolio = () => {
    // Partner data
    const partners = [
        {
            name: 'Microsoft',
            logo: Microsoft,
            url: 'https://www.microsoft.com',
        },
        {
            name: 'Stanford',
            logo: Stanford,
            url: 'https://www.stanford.edu',
        },
        {
            name: 'University of California',
            logo: UOC,
            url: 'https://www.universityofcalifornia.edu',
        },
        {
            name: 'Spotify',
            logo: Spotify,
            url: 'https://www.spotify.com',
        },
    ];

    return (
        <>
            <div className="my-4 py-4" id="portfolio">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Partners</h2>
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {partners.map((partner, index) => (
                            <a
                                key={index}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#FFF9F3] transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max"
                            >
                                <div className="flex justify-center items-center h-full">
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} Logo`}
                                        className="w-48 h-48 object-contain"
                                    />
                                </div>
                            </a>
                        ))}
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
