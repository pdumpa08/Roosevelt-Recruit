import React, { useState } from 'react';
import { handleGoogleLogin, handleGoogleSignup, handleEmailSignup, handleEmailLogin } from '../services/authService';
import googleLogo from '../images/google-logo.png'; // Make sure to add the Google logo image in the assets folder

const AuthModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl mb-4">Login / Signup</h2>
                
                <div className="mb-6">
                    <h3 className="text-xl mb-2">Login for Businesses</h3>
                    <div className="flex justify-center items-center mb-4">
                        <div className="flex items-center cursor-pointer mx-2" onClick={() => handleGoogleLogin('business')}>
                            <img src={googleLogo} alt="Google Login" className="w-10 h-10" />
                            <span className="ml-2">Login with Google</span>
                        </div>
                        <div className="flex items-center cursor-pointer mx-2" onClick={() => handleGoogleSignup('business')}>
                            <img src={googleLogo} alt="Google Signup" className="w-10 h-10" />
                            <span className="ml-2">Signup with Google</span>
                        </div>
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 border rounded-md w-full mb-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-2 border rounded-md w-full mb-2"
                    />
                    <button
                        className="text-white bg-orange-700 hover:bg-orange-800 inline-flex items-center justify-center w-full px-6 py-3 shadow-xl rounded-xl mb-2"
                        onClick={() => handleEmailSignup(email, password, 'business')}
                    >
                        Signup with Email
                    </button>
                    <button
                        className="text-white bg-orange-700 hover:bg-orange-800 inline-flex items-center justify-center w-full px-6 py-3 shadow-xl rounded-xl mb-2"
                        onClick={() => handleEmailLogin(email, password)}
                    >
                        Login with Email
                    </button>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl mb-2">Login for Students</h3>
                    <div className="flex justify-center items-center mb-4">
                        <div className="flex items-center cursor-pointer mx-2" onClick={() => handleGoogleLogin('student')}>
                            <img src={googleLogo} alt="Google Login" className="w-10 h-10" />
                            <span className="ml-2">Login with Google</span>
                        </div>
                        <div className="flex items-center cursor-pointer mx-2" onClick={() => handleGoogleSignup('student')}>
                            <img src={googleLogo} alt="Google Signup" className="w-10 h-10" />
                            <span className="ml-2">Signup with Google</span>
                        </div>
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 border rounded-md w-full mb-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-2 border rounded-md w-full mb-2"
                    />
                    <button
                        className="text-white bg-orange-700 hover:bg-orange-800 inline-flex items-center justify-center w-full px-6 py-3 shadow-xl rounded-xl mb-2"
                        onClick={() => handleEmailSignup(email, password, 'student')}
                    >
                        Signup with Email
                    </button>
                    <button
                        className="text-white bg-orange-700 hover:bg-orange-800 inline-flex items-center justify-center w-full px-6 py-3 shadow-xl rounded-xl mb-2"
                        onClick={() => handleEmailLogin(email, password)}
                    >
                        Login with Email
                    </button>
                </div>

                <button
                    className="text-gray-700 hover:text-gray-900 mt-4"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default AuthModal;