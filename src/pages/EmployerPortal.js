import React, { useState, useEffect } from 'react';
import { db } from '../firebaseconfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const EmployerPortal = () => {
    useDocTitle('Employer Portal');

    const [jobPostings, setJobPostings] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [applications, setApplications] = useState([]);
    const [isApplicationsModalOpen, setIsApplicationsModalOpen] = useState(false);

    useEffect(() => {
        const fetchJobPostings = async () => {
            const querySnapshot = await getDocs(collection(db, 'jobPostings'));
            const jobs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setJobPostings(jobs);
        };

        fetchJobPostings();
    }, []);

    const handleViewApplications = async (job) => {
        setSelectedJob(job);
        const q = query(collection(db, 'applications'), where('jobId', '==', job.id));
        const querySnapshot = await getDocs(q);
        const apps = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setApplications(apps);
        setIsApplicationsModalOpen(true);
    };

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-6" data-aos="fade-up">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Employer Portal</h1>
                <p className="text-lg text-gray-600 mb-8">
                    This is the central hub for managing your job postings and reviewing applications.
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
                                {jobPostings.reduce((total, job) => total + job.applications, 0)}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="job-postings">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Job Postings</h2>
                    <ul className="space-y-4">
                        {jobPostings.map((job) => (
                            <li key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                                <p className="text-gray-600">{job.location}</p>
                                <p className="text-gray-700 mt-2">Applications: {job.applications}</p>
                                <button
                                    className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                                    onClick={() => handleViewApplications(job)}
                                >
                                    View Applications
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {isApplicationsModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Applications for {selectedJob?.title}</h3>
                        <ul className="space-y-4">
                            {applications.map((app) => (
                                <li key={app.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                    <p className="text-gray-700"><strong>Name:</strong> {app.applicantName}</p>
                                    <p className="text-gray-700"><strong>Email:</strong> {app.applicantEmail}</p>
                                    <p className="text-gray-700"><strong>Cover Letter:</strong> <a href={app.coverLetterURL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View</a></p>
                                    {app.answers.map((answer, index) => (
                                        <p key={index} className="text-gray-700"><strong>Answer {index + 1}:</strong> {answer}</p>
                                    ))}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
                                onClick={() => setIsApplicationsModalOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default EmployerPortal;