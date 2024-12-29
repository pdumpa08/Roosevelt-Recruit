import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { auth } from '../../firebaseconfig';
import { handleLogout } from '../../services/authService';
import AuthModal from '../authModal.js';

const NavLinks = () => {
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Jobs
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Posting Portal
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>
            {user ? (
                <button
                    className="text-white bg-orange-700 hover:bg-orange-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            ) : (
                <>
                    <button
                        className="text-white bg-orange-700 hover:bg-orange-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Login / Signup
                    </button>
                    <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </>
            )}
        </>
    );
};

export default NavLinks;