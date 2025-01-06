import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-50 py-16 px-8" id="contact" data-aos="fade-up">
            <h2 className="text-center text-4xl font-bold text-blue-900 mb-6">Contact Us</h2>
            <div className="flex justify-center mb-8">
                <div className="w-32 h-1 bg-blue-900"></div>
            </div>
            <form className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                        id="message"
                        rows="6"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-900 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
