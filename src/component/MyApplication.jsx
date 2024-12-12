import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProviver';

const MyApplication = () => {

    let {user}= useContext(AuthContext)


    let [data,setData] =useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/jobs-application?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[user])
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Company Logo</th>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>LinkedIn</th>
              <th>GitHub</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {data.map((job) => (
              <tr key={job._id}>
                <td>
                  <img src={job.company_logo} alt={job.company} className="w-12 h-12" />
                </td>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>
                  <a href={job.linkedIn} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </td>
                <td>
                  <a href={job.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </td>
                <td>
                  <a href={job.resume} target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyApplication;