import React from 'react';
import img from '../images/web.svg';
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {
    // Job data
    const jobs = [
        {
            title: "McLaren Formula 1",
            subtitle: "Junior Software Engineer",
            description: "The purpose of this role is to analyse, design and engineer innovative software solutions to projects aligned with the requirements of McLaren Racing.",
            img: img,
        },
        {
            title: "Nike",
            subtitle: "Senior Product Engineer",
            description: "The purpose of this role is to analyse, design and engineer innovative product solutions to projects aligned with the requirements of the Nike Well Collective.",
            img: img2,
        },
        {
            title: "Google",
            subtitle: "AI Research Scientist",
            description: "Drive cutting-edge AI advancements, design innovative algorithms, and contribute to the research and development of next-generation AI solutions at Google AI Labs.",
            img: img3,
        },
        {
            title: "Tesla",
            subtitle: "Battery Systems Engineer",
            description: "Innovate and optimize Tesla's battery systems to push the boundaries of energy storage technologies for electric vehicles and sustainable energy solutions.",
            img: img4,
        },
    ];

    return (
        <div id="services" className="bg-gray-100 py-12">
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Featured Jobs</h2>
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-blue-900"></div>
                </div>
            </div>

            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-[#C2D4F4] transition-all ease-in-out duration-400 overflow-hidden text-white hover:scale-105 rounded-lg shadow-2xl p-3 group"
                        >
                            <div className="m-2 text-justify text-sm">
                                <img
                                    alt={`${job.title} Logo`}
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                    src={job.img}
                                />
                                <h2 className="font-bold my-4 text-2xl text-center text-blue-900">{job.title}</h2>
                                <h4 className="font-semibold my-4 text-1xl text-center text-gray-100">{job.subtitle}</h4>
                                <p className="text-md font-semibold text-blue-900">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
