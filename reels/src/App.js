import { Routes,Route} from "react-router-dom";

import Feed from "./components/Feed";
import React from "react";
import Login from './components/Login'
import Singup from "./components/Singup";
import Profile from "./components/Profile";
import Pagenotfound from "./components/Pagenotfound";
import { AutoContextProvider } from "./context/AutoContext";

function App() {
  return (
    <>
      
      <AutoContextProvider>
      <Routes>
      <Route path="/feed" element={<Feed></Feed>}>Feed</Route>
      <Route path="/login" element={<Login></Login>}>Login</Route>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/singup" element={<Singup/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
      </AutoContextProvider>

      
    </>
  );
}

export default App;
