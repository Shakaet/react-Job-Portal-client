import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';

import img1 from "../assets/img/jobPic.jpeg"
import img2 from "../assets/img/team1.jpeg"

const Banner = () => {
    return (
        <div className='overflow-x-hidden'>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <motion.img
    animate={{ y: [100,150,100] }}
    transition={{ duration: 10,repeat:Infinity }}
      src={img1}
      className="max-w-sm rounded-lg rounded-t-[40px] rounded-br-[40px] w-64 h-40 shadow-2xl" />
    <motion.img
    animate={{ x: [100,150,80] }}
    transition={{ duration: 10,repeat:Infinity }}
      src={img2}
      className="max-w-sm rounded-lg rounded-t-[40px] rounded-br-[40px] w-64 h-40 shadow-2xl" />
    <div className='w-1/2'>
    <motion.h1
  animate={{ x: 100 }}
  transition={{ duration: 2, delay: 1, ease: easeOut,repeat:Infinity }}
  className="text-5xl font-bold">
    Latest <motion.span
    animate={{color:['#ecff3c','#33ffe3','#ff6133']}}
    transition={{ duration: 1.5,repeat:Infinity }}
  > Jobs</motion.span> News!
     
     </motion.h1>
      
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;