import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProviver';
import { Link } from 'react-router-dom';

const MyPostedJob = () => {

    let [mypostedjobs,setmypostedjobs]= useState([])

    let {user}=useContext(AuthContext)

    useEffect(()=>{
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setmypostedjobs(data))
    },[user.email])
    return (
        <div>
            <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Deadline</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Application Count</th>
            <th className="border border-gray-300 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {mypostedjobs.map((job) => (
            <tr key={job._id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{job.title}</td>
              <td className="border border-gray-300 px-4 py-2">{job.applicationDeadline}</td>
              <td className="border border-gray-300 px-4 py-2">{job.location}</td>
              <td className="border border-gray-300 px-4 py-2">{job.applicationCount}</td>
              <td className='border border-gray-300 px-4 py-2'>
              <Link to={`/viewapp/${job._id}`}> <button  className='btn btn-warning'>View Application</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default MyPostedJob;