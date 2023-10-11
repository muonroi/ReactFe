import React, { useState } from 'react'
import { productApi } from '../../Api/productApi'
export default function FileUpload(props)
{
  var addImage = props.addImage;
    var [file,setFile] = useState([])
    const handleChange =(e) => {
        setFile(e.target.files[0])
    }
    const handleUpload = async (e) => {
        console.log('send file', file);
        const data = new FormData();
        data.append('files', file);
      
        try {
          e.target.innerText = 'Uploading...'
          const response =await productApi.upload(data);
          e.target.innerText = 'Upload'
          var id = response.data[0].id;
          var url = response.data[0].url;
          addImage(id,url);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
      
    return (<>
    <div className='fileUpload'>
        <input type="file" onChange={handleChange}/>
        <button onClick={handleUpload}>Submit</button>
    </div>
    </>)
}