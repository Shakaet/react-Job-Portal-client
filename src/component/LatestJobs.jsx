import { p } from 'motion/react-client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestJobs = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-10 mb-10">
      {data.map((item, index) => (
        <div key={index}>
          <div className="card card-compact bg-base-100 w-96 h-[500px] shadow-xl p-8">
         <div className='flex items-center justify-evenly'>
         <div>
           <figure>
              <img
                src={item.company_logo}
                alt="Shoes"
              />
            </figure>
           </div>
           <div>
           <h2 className="card-title">{item.title || "Job Title"}</h2>
           <p>{item.location}</p>
           <div className='badge badge-secondary'>NEW</div>
           </div>
         </div>
            <div className="card-body">
              
              <p className='flex-grow'>{item.description || "Job description goes here."}</p>

             <div>
             {
                item.requirements.map(skill=><p className='badge badge-secondary m-3'>{skill}</p>

                )
              }
             </div>
              <div className="card-actions">
                <p className='text-blue-500 font-extrabold mb-5'>Salary: {item.salaryRange.min} - {item.salaryRange.max} {item.salaryRange.currency}</p> <br />
                <Link to={`/jobs/${item._id}`}><button className="btn btn-primary">View Details</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestJobs;
