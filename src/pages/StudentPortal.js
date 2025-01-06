import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const StudentPortal = () => {
    useDocTitle('Student Portal');

    const [jobPostings] = useState([
        {
            id: 1,
            title: 'Software Engineer',
            location: 'New York, NY',
            applications: 5,
            companyName: 'Tech Co.',
            email: 'contact@techco.com',
            website: 'https://techco.com',
            description: 'Developing innovative software solutions.',
            status: 'Pending',
        },
        {
            id: 2,
            title: 'Product Manager',
            location: 'San Francisco, CA',
            applications: 8,
            companyName: 'Product Inc.',
            email: 'hr@productinc.com',
            website: 'https://productinc.com',
            description: 'Lead product development and strategy.',
            status: 'Pending',
        },
    ]);

    const updateJobStatus = (id, status) => {

        // Update the job status here

    };

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <NavBar />
            <div className="container mx-auto p-6" data-aos="fade-up">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Student Portal</h1>
                <p className="text-lg text-gray-600 mb-8">
                    This is the central hub for viewing job postings and managing your applications.
                </p>

                <section className="dashboard mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h2>
                    <div className="flex gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
                            <h3 className="text-xl font-medium text-gray-700">Total Job Postings</h3>
                            <p className="text-2xl font-bold text-gray-800">{jobPostings.length}</p>
                        </div>
                    </div>
                </section>

                <section className="job-postings">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Available Job Postings</h2>

                    <ul className="space-y-4">
                        {jobPostings.map((job) => (
                            <li key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                                <p className="text-gray-600">{job.location}</p>
                                <p className="text-gray-700 mt-2">Applications: {job.applications}</p>
                                <p className="text-gray-700 mt-2">Company: {job.companyName}</p>
                                <p className="text-gray-700 mt-2">{job.description}</p>
                                <p className="text-gray-700 mt-2">Status: {job.status}</p>

                                <div className="mt-4 flex gap-4">
                                    <button
                                        className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                                        onClick={() => updateJobStatus(job.id, 'Accepted')}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                                        onClick={() => updateJobStatus(job.id, 'Denied')}
                                    >
                                        Deny
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            <br></br>
            <br></br>
            <Footer />
        </>
    );
};

export default StudentPortal;
