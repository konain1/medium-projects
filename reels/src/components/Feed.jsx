import React from 'react'
import './Feed.css'

function Feed() {
  return (
    <>
    <div className='main__Feed_cont'>
     <div className='header' > 

     <div className='insta_logo'>
     <img className='logo_img' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png'/>

     </div>

     <div className='profile_pic'>
      <img className='pic_img' src='https://images.unsplash.com/photo-1665427803235-8e295131ad29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
     </div>

     </div>

     <div className='upload'>
     <div className='upload_div'>
     <h3>upload</h3>
     <i class="fa-solid fa-film mymovie-icon"></i> 
     </div>
    
     </div>


    </div>
    </>
  )
}

export default Feed
