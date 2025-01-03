import React from 'react';
import img from '../images/erhsLogo.png';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
                <div className="flex flex-col py-8 justify-between items-center" data-aos="fade-up">
                <div className="justify-center">
                    <img alt="card img" className="rounded-t" src={img} style={{ width: '300px', height: 'auto' }} />
                </div>
                    <br></br><br></br>
                    <div
                        className="my-4 text-center lg:text-center lg:my-0 w-full px-8"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                    >
                        <h3 className="text-3xl text-orange-700 font-bold">Our Mission</h3>
                        <div>
                            <p className="my-3 text-xl text-gray-600 font-semibold">
                                Eleanor Roosevelt strives to provide internship & career
                                opportunities for all students.
                            </p>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="flex flex-row justify-center items-center space-x-4">
                            <Link
                                to="/contact"
                                className="text-white bg-blue-900 hover:bg-blue-500 inline-flex items-center justify-center px-6 py-2 text-lg shadow-xl rounded-2xl"
                            >
                                Student Portal
                            </Link>
                            <Link
                                to="/contact"
                                className="text-black bg-blue-300 hover:bg-blue-500 inline-flex items-center justify-center px-6 py-2 text-lg shadow-xl rounded-2xl"
                            >
                                Employer Portal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;