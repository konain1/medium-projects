import React, { useEffect } from 'react'
import './Profile.css'
import {AuthContext} from '../context/AutoContext'
import {useContext} from 'react'
import {storage} from '../firebaseConfig '
import {ref,uploadBytes,listAll, connectStorageEmulator, getDownloadURL} from 'firebase/storage'
import {useState} from 'react'



function Profile() {
  let contextObj = useContext(AuthContext)
  const [file,setFile] = useState();
  const [imageList,setImageList] = useState([])

  
  let imageRef = ref(storage,"/images")

  const fileUploading =(e)=>{
    
    const uploadedFile = e.target.files[0];
    const FileRef = ref(storage, `images/${uploadedFile.name}`);

    uploadBytes(FileRef, uploadedFile).then((snapshot) => {
      console.log('Uploaded a blob or file!');
     

      const DownloadRef = ref(storage, `images/${uploadedFile}`);

      getDownloadURL(ref(storage,`images/${uploadedFile.name}` ))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
setImageList((prev)=>[...prev,url])
    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
      
     
      //
    });
  }
  useEffect(()=>{
    listAll(imageRef).then((respornse)=>{
        respornse.items.forEach((i)=>{
            getDownloadURL(i).then((url)=>{
                setImageList((prev)=> [...prev,url])
            })
        })
    })
},[])

 
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

    <div>
      <input type="file" onChange={fileUploading} />
     
    </div>
    <div className='postArea'>
    {imageList.map((e)=>{

      return(<div><img src={e}/></div>)  

      })}
    </div>
    
   </>
   }
    
   </>
  )
}

export default Profile
