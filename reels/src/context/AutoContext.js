
import { auth } from "../Firebase";
import {onAuthStateChanged} from "firebase/auth";
import React, { useState ,useEffect, Children} from "react";

 export let AuthContext = React.createContext();


export function AutoContextProvider({children}){

    const[mainLoader,setMainLoader] = useState(true);
    const [cuser,setUser] = useState(null)
    let value = {cuser}

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
      }),[])

      

      return (
        <AuthContext.Provider value={value}>
            {mainLoader == false &&children}
        </AuthContext.Provider>
      )
    


}

