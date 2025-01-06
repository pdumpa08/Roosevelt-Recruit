import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const EmployerPortal = () => {
    useDocTitle('Employer Portal');

    const [jobPostings, setJobPostings] = useState([
        {
            id: 1,
            title: 'Software Engineer',
            location: 'New York, NY',
            applications: 5,
            companyName: 'Tech Co.',
            email: 'contact@techco.com',
            website: 'https://techco.com',
            description: 'Developing innovative software solutions.',
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
        },
    ]);

    const [newJob, setNewJob] = useState({
        companyName: '',
        email: '',
        website: '',
        title: '',
        description: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const addJobPosting = () => {
        const newJobPosting = {
            id: jobPostings.length + 1,
            title: newJob.title || `New Job Title ${jobPostings.length + 1}`,
            location: 'Location Placeholder',
            applications: 0,
            companyName: newJob.companyName,
            email: newJob.email,
            website: newJob.website,
            description: newJob.description,
        };
        setJobPostings([...jobPostings, newJobPosting]);
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewJob({ ...newJob, [name]: value });
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
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Employer Portal</h1>
                <p className="text-lg text-gray-600 mb-8">
                    This is the central hub for managing your job postings and reviewing
                    applications.
                </p>

                <section className="dashboard mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h2>
                    <div className="flex gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
                            <h3 className="text-xl font-medium text-gray-700">Total Job Postings</h3>
                            <p className="text-2xl font-bold text-gray-800">{jobPostings.length}</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
                            <h3 className="text-xl font-medium text-gray-700">Total Applications</h3>
                            <p className="text-2xl font-bold text-gray-800">
                                {jobPostings.reduce(
                                    (total, job) => total + job.applications,
                                    0
                                )}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="job-postings">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Job Postings</h2>
                    <button
                        className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 mb-6"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Add New Job Posting
                    </button>

                    <ul className="space-y-4">
                        {jobPostings.map((job) => (
                            <li key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                                <p className="text-gray-600">{job.location}</p>
                                <p className="text-gray-700 mt-2">Applications: {job.applications}</p>
                                <button className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                                    View Applications
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Modal for Add Job Posting */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add New Job Posting</h3>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addJobPosting();
                                }}
                            >
                                <div className="mb-4">
                                    <label className="block text-gray-700">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={newJob.companyName}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={newJob.email}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Website</label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={newJob.website}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Job Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={newJob.title}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Job Description</label>
                                    <textarea
                                        name="description"
                                        value={newJob.description}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                                    >
                                        Save Job Posting
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </>
    );
};

export default EmployerPortal;
