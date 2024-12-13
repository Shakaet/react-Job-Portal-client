import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApp = () => {

    let data= useLoaderData()

    let handleStatusUpdate=(e,id)=>{

        let data=e.target.value
        console.log(data,id)

        
        fetch(`http://localhost:3000/job-application/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: data }),
        })
            .then(res => res.json())
            .then(data => console.log(data));
        


    }


 
    return (
        <div>
            <h2>{data.length}</h2>
            <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Application Details</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Applicant Email</th>
            <th className="border border-gray-300 px-4 py-2">LinkedIn</th>
            <th className="border border-gray-300 px-4 py-2">GitHub</th>
            <th className="border border-gray-300 px-4 py-2">Resume</th>
             <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Update Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((app) => (
            <tr key={app._id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{app.applicantMail}</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href={app.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  LinkedIn
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a href={app.github} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  GitHub
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a href={app?.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Resume
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {app.status}
              </td>

              <td className="border border-gray-300 px-4 py-2">
              <div>
         
          <select
          onChange={(e)=>handleStatusUpdate(e,app._id)}
            name="status" defaultValue={app.status|| "change Status"}
            className="w-full p-2 border border-gray-300 rounded"
            
          >
            <option value="Under Review">Under Review</option>
            <option value="Set Review">Set Review</option>
            <option value="Hired">Hired</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
              </td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default ViewApp;