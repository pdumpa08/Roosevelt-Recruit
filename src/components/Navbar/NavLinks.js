import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-orange-900 hover:bg-orange-700 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/student-portal">
                Student Portal
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-700 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/employer-portal">
                Employer Portal
            </HashLink>
        </>
    )
}

export default NavLinks;
