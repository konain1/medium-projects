import React from "react";
import { useState ,useEffect} from "react";
import { signInWithEmailAndPassword ,signOut,onAuthStateChanged} from "firebase/auth";
import { auth } from "../Firebase";
import { async } from "@firebase/util";







function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState(); 
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error,setError] = useState("");
  const[mainLoader,setMainLoader] = useState(true);





  const trackemail = (e) => {
    setemail(e.target.value);
  };

  const trackpassword = (e) => {
    setpassword(e.target.value);
  };

const singout = async()=>{
  await signOut(auth)
  setUser(null)
}
  const printDetails = async () => {
   
        
    try{
        setLoader(true)
        let userDetails = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userDetails.user);
        console.log(userDetails)

    }catch(err){
        setError(err.message)

        setTimeout(()=>{
            setError('');
        },3000)
    }
   
    setLoader(false)
  };


  useEffect((()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
       setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null)
      }

      setMainLoader(false)
    });
  }))




  return (
    <>
   
    {
      
      error != ""? <h1>{error}</h1> : <>
    {loader === true ?<h1>wait few minutes</h1> : <>
    {user !=null ? (
      <>
      <button onClick={singout}>singout</button>
        <h1> {user.uid}</h1>
        </>
      ) : (
        <>
         
          <input
            type="email"
            onChange={trackemail}
            value={email}
            placeholder="email"
          />
          <input
            type="password"
            onChange={trackpassword}
            value={password}
            placeholder="password"
          />
          <button type="click" onClick={printDetails}>
            Login
          </button>
        </>
      )}
    </>}
      
    </>}
    </>
  );
}

export default Login;
