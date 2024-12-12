import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './component/firebase.init';

export let AuthContext =createContext(null)

const provider = new GoogleAuthProvider();

const AuthProviver = ({children}) => {

    let [user,setUser] =useState([])

    let [loading,setLoading]=useState(true)

  let handleGoogleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)

  }
      
    let handleSignUp =(email,password)=>{
         
         setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)

    }

    let handleLogins=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    let handleSignOut=()=>{

        setLoading(true)

        return signOut(auth)
    }





    useEffect(()=>{
        let unsubscribed= onAuthStateChanged(auth, (CurrentUser) => {
            setLoading(false)
           setUser(CurrentUser)
           console.log(CurrentUser)
          });

          return ()=>{
            unsubscribed()
          }
    },[])

    let val ={
        handleSignUp,
        user,
        loading,
        handleLogins,
        handleSignOut,
        handleGoogleLogin


    }

    
    return (
        <AuthContext.Provider value={val}>
               {children}
        </AuthContext.Provider>
    );
};

export default AuthProviver;