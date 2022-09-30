import { createUserWithEmailAndPassword} from 'firebase/auth';

import { auth } from "../Firebase";

import React from 'react'
import {useState} from 'react'
import { async } from '@firebase/util';

function Singup() {
 
  const [email,setEmail] = useState();
  const [password,setPassword] = useState()
  const [fullname,setFullname] = useState();
  const [loader, setLoader] = useState(false);
  const [error,setError] = useState("");
  const [user, setUser] = useState("");


  let singupCreated = async()=>{

    try{
      setLoader(true)
      let signupUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
     setUser(signupUser.user)
     signupUser.user.displayName = fullname;
    
     console.log(signupUser.user.displayName)

  }catch(err){
      setError(err.message)

      setTimeout(()=>{
          setError('');
      },2000)
  }
  setLoader(false)
    


  }

  // let singupMail = (e)=>{
  //   setEmail(e.target.value)
  // }

  // let singupPassword = (e)=>{
  //   setPassword(e.target.value)
  // }

  // let fullName = (e)=>{
  //   setFullname(e.target.value)
  // }


  return (
 
      <>
     
      {error != "" ?<h1>{error}</h1>:
      <>

      {user != "" ? <><h1>{user.displayName}</h1></>: 
      <>

      <label>email: </label>
        <input type='email'  placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />

        <label>password</label>
        <input type='paasword'  placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <label>fullName</label>
        <input type='text' value={fullname} onChange={(e)=>{setFullname(e.target.value)}} />

        <button type='submit' onClick={singupCreated}>singup</button> 


      </>
      
      }
       

      </>
      }
     
      
       
      </>
  )
}

export default Singup
