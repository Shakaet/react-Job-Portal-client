import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerAnimation from "../assets/lottie/Animation - 1733837889148.json"
import { AuthContext } from '../AuthProviver';

const Register = () => {

    let {handleSignUp}= useContext(AuthContext)

    let handleRegistered =(e)=>{
        e.preventDefault()


        let email= e.target.email.value
        let password= e.target.password.value

        console.log(email,password)

         handleSignUp(email,password)
         .then(res=>{
            console.log(res.user)
         })
         .catch(error=>{
            console.log(error)
         })










    }



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen overflow-x-hidden">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    <Lottie className='w-96 md:ml-24' animationData={registerAnimation} loop={true} />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-3xl font-bold ms-5 p-5">Registered now!</h1>
      <form onSubmit={handleRegistered} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;