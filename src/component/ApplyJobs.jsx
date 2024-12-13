import React, { useContext } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProviver';

const ApplyJobs = () => {

   let {id}=  useParams()
   console.log(id)

   const link = useNavigate();
  

   let {user}= useContext(AuthContext)

   let handleApply=(e)=>{
    e.preventDefault()

    let linkedIn=e.target.linkedin.value
    let github=e.target.github.value
    let resume=e.target.resume.value
    console.log(linkedIn,github,resume)

    let applicationData={
        job_id:id,
        applicantMail:user.email,
        linkedIn,
        github,
        resume
    }

    fetch('http://localhost:3000/jobs-application', {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Inform the server of the data format
        },
        body: JSON.stringify(applicationData), // Convert object to JSON
      })
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => {
          console.log('Success:', data); // Handle success
          link("/myApplication")
        })

   }
    return (
        <div>

<form onSubmit={handleApply} className="w-1/2 mx-auto mt-10 mb-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input type="url" placeholder="LinkedIn URL"name='linkedin' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URl</span>
          </label>
          <input type="url" placeholder="Github URl"name='github' className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input type="url" placeholder="Resume URL" name='resume' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
            
        </div>
    );
};

export default ApplyJobs;