import React from 'react';



    import {
        createBrowserRouter,
      } from "react-router-dom";
import Mainlayout from '../layout/Mainlayout';
import Home from '../pages/Home';
import Login from '../component/Login';
import Register from '../component/Register';
import JobDetails from '../component/JobDetails';
import PrivateRoute from '../component/PrivateRoute';
import ApplyJobs from '../component/ApplyJobs';
import MyApplication from '../component/MyApplication';
import AddaJob from '../component/AddaJob';
      
      const router = createBrowserRouter([
        {
          path: "/",
          element: <Mainlayout></Mainlayout>,
          children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
              path:"/jobs/:id",
              element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
              path:"/applyJobs/:id",
              element:<PrivateRoute><ApplyJobs></ApplyJobs></PrivateRoute>

            },
            {
              path:"/myApplication",
              element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
            },
            {
              path:"/addajob",
              element:<PrivateRoute><AddaJob></AddaJob></PrivateRoute>
            }

          ]
        },
      ]);
   

export default router;