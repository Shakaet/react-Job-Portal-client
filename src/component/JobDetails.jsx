import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    let data= useLoaderData()
    return (
        <div>

            <div className='card card-compact bg-base-100 w-1/2 mx-auto shadow-xl p-8 mt-10 mb-10'>
            <h2 className='text-5xl font-extrabold mt-5 mb-5'>{data.title}</h2>
            <p className='text-3xl font-extrabold mt-5 mb-5'>{data.description}</p>
            <p className='text-xl font-extrabold text-red-600 mt-5 mb-5'>{data.location}</p>
            <Link to={`/applyJobs/${data._id}`}><button className='btn btn-warning w-1/2 mx-auto'>Apply Now</button></Link>
            </div>
            
        </div>
    );
};

export default JobDetails;