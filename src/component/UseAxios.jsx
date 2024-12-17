import axios from 'axios';
import { linkWithCredential } from 'firebase/auth/web-extension';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProviver';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true // Correct property name and syntax
  });
  

const UseAxios = () => {


    let{handleSignOut}= useContext(AuthContext)
    let link =   useNavigate()


    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=> {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
          }, error=> {
            console.log("error occurs",error)


            if(error.status===401 || error.status===401){
               handleSignOut()
               .then(res=>{
               
                link("/login")

               })
               .catch(error=>{
                console.log(error)
               })
            }
            return Promise.reject(error);
          });
    },[])




    return axiosInstance
   
};

export default UseAxios;