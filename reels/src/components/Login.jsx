import React from "react";
import {useState} from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase'


function Login() {

    const [email,setemail] = useState();
    const [password,setpassword] = useState();

    const trackemail = (e) =>{
        setemail(e.target.value)
    }
    const trackpassword =(e)=>{
        setpassword(e.target.value);
    }

    const printDetails = async()=>{

        let userDetails = await createUserWithEmailAndPassword(auth, email, password)
        alert(email+" "+password);
        console.log(userDetails)
    }
    return(
        <>
          <input  type='email' onChange={trackemail}value={email} placeholder="email"/>
          <input  type='password' onChange={trackpassword}value={password} placeholder="password"/>

          <button type="click" onClick={printDetails}>Login</button>
        </>
    )
}

export default Login