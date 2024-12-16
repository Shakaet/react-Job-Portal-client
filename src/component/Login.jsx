import Lottie from 'lottie-react';
import React, { useContext } from 'react';

import login from "../assets/lottie/Animation - 1733847677345.json"
import { AuthContext } from '../AuthProviver';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    let {handleLogins,handleGoogleLogin}=useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    let handlegoogle=()=>{
        handleGoogleLogin()
        .then((result) => {
            console.log(result.user)
            navigate(from, { replace: true });
          }).catch((error) => {
           console.log(error)
          });
     }

    let handleLogin =(e)=>{
        e.preventDefault()


        let email= e.target.email.value
        let password= e.target.password.value

        console.log(email,password)

         handleLogins(email,password)
         .then(res=>{
            alert("login successful",res.user)
            let user={email:email}

            axios.post("http://localhost:3000/jwt",user,{withCredentials:true})
            .then(data=>console.log(data.data))



            navigate(from, { replace: true });
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
     
    <Lottie className='w-80 md:ml-24' animationData={login} loop={true} />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-3xl font-bold ms-5 p-5">Login Now</h1>
      <form onSubmit={handleLogin} className="card-body">
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
          <button className="btn btn-primary">Login Now</button>
        </div>
      </form>
      <button onClick={handlegoogle} className="btn btn-primary w-1/2 mx-auto mb-5">Google login</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;