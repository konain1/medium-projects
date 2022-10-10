import React from 'react'
import './Profile.css'
import {AuthContext} from '../context/AutoContext'
import {useContext} from 'react'

function Profile() {
  let contextObj = useContext(AuthContext)
  return (
   <>
   {contextObj == null ? <div> Need to login</div>: 
   <>
   <div className='header'></div>
    <div className='main-cont'>
      <div className='img-cont'> 
      <img src='https://via.placeholder.com/150

C/O https://placeholder.com/' className='Pro-img'/>
      </div>
      <div className='details'>
        <div className='personalInfo'>
        <div className='name'><h2>  <span>Name:</span> {contextObj.uid}</h2></div>
        <div className='email'><h3><span>Email:</span> {contextObj.email}</h3> </div>
        <div className='reelsPost'> <span>Post</span> :10</div>
        </div>
        
      </div>
    </div>
   </>
   }
    
   </>
  )
}

export default Profile
