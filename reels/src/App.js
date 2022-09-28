import { Routes , Route} from "react-router-dom";
import Feed from "./components/Feed";
import React from "react";
import Login from './components/Login'
import Singup from "./components/Singup";
import Profile from "./components/Profile";
import Pagenotfound from "./components/Pagenotfound";

function App() {
  return (
    <>
      <h1>reels feed</h1>

      <Routes>
      <Route path="/feed" element={<Feed></Feed>}>Feed</Route>
      <Route path="/login" element={<Login></Login>}>Login</Route>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/singup" element={<Singup/>}/>
      <Route path="*" element={<Pagenotfound/>}/>


     


      </Routes>
    </>
  );
}

export default App;
