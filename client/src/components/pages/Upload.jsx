// import React, { useState } from 'react'
// import { useDropzone } from 'react-dropzone';
// import './Upload.css'
// import axios from 'axios';
// const Upload = () => {
//     const [uploadedFiles, setUploadedFiles] = useState();
//     const [refernce, setrefernce] = useState("");
//     const [person, setperson] = useState("");
//     const [place, setplace] = useState("");
//     const[cont, setcont] = useState("")
//     const { getRootProps, getInputProps } = useDropzone({
//         onDrop: (acceptedFiles) => {
//             console.log(acceptedFiles);
//         setUploadedFiles(acceptedFiles);
//       },});
//     const handlesubmit = async (e)=>{
//       e.preventDefault();
//         const formData = new FormData();
//     formData.append('image', "amit");
//     console.log("form data "+ formData);
//     console.log(uploadedFiles);
//     // formData.append('ref', refernce);
//     // formData.append('place', place);
//     // formData.append('contact', cont);
//     // formData.append('person', person);
//     // console.log(formData);
//     try {
//         const res =  await axios.post("http://localhost:1000/api/upload",
//         {ref : refernce,
//          person : person,
//          place: place,
//           file: uploadedFiles,
//           contact: cont
//         })
//         const d = res;
//         console.log(d);
//     } catch (error) {
//         console.error(error);

//     }

//     }
//     return ( <>
//     <form onSubmit={handlesubmit} encType='multipart/form-data'>
//       <div >
//       {/* <div {...getRootProps()}> */}
//         {/* <input {...getInputProps()} type='file' /> */}
//         <input className='file' type='file' accept=".png, .jpg, .jpeg" onChange={(e)=>{setUploadedFiles(e.target.files[0])}} />
//         <div className='FilesDragAndDrop__area'>
//       Hey, drop me some files
//       <span
//         role='img'
//         aria-label='emoji'
//         className='area__icon'
//       >
//         &#128526;
//       </span>
//       {/* <ul>
//         {uploadedFiles.map((file) => (
//           <li key={file.name}>{file.name}</li>
//         ))}
//       </ul> */}
//     </div>
//       </div>

//       <div className="container">
//       <label for="username">Reference:</label>
//     <input type="text" placeholder="What is it..." onChange={(e)=>{setrefernce(e.target.value)}}/>
//     <label for="place">Place</label>
//     <input type="text" placeholder="Where you found..." onChange={(e)=>{setplace(e.target.value)}} />
//     <label for="Get it">Founder</label>
//     <input type="text" placeholder="Person who found it..." onChange={(e)=>{setperson(e.target.value)}}/>
//     <label for="Get it">Contact details</label>
//     <input type="text" placeholder="Phone no, email, insta-username..." onChange={(e)=>{setcont(e.target.value)}}/>
//     <button className='btn' type='submit' >Submit</button>
//   </div>
//       </form>
//       </>
//     );
// }

// export default Upload

import React, { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Upload.css";
import axios from "axios";

const Upload = () => {
  const [file, setfile] = useState(null);
  const [reference, setReference] = useState("");
  const [person, setPerson] = useState("");
  const [place, setPlace] = useState("");
  const [cont, setCont] = useState("");
  const fileInputRef = useRef(null);
  const handleAreaClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("====================================");
    console.log("clicked ");
    console.log("====================================");
    console.log(file);
    setfile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("reference", reference);
    formData.append("contact", cont);
    formData.append("person", person);
    formData.append("place", place);
    formData.append("token",localStorage.getItem("token"));

    axios
      .post("http://localhost:1000/api/upload", formData)
      .then((res) => {
        console.log("file uploaded");
      })
      .catch((er) => console.log(er));
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <div onClick={handleAreaClick} className="FilesDragAndDrop__area">
            {file ? "File selected" : "Hey, drop me some files"}
            <span role="img" aria-label="emoji" className="area__icon">
              <input
                ref={fileInputRef}
                type="file"
                onChange={(e) => handleFileChange(e)}
                accept=".png, .jpg, .jpeg"
                style={{ display: "none" }}
              />
              &#128526;
            </span>
          </div>
        </div>

        <div className="container">
          <label htmlFor="username">Reference:</label>
          <input
            type="text"
            placeholder="What is it..."
            onChange={(e) => setReference(e.target.value)}
          />
          <label htmlFor="place">Place</label>
          <input
            type="text"
            placeholder="Where you found..."
            onChange={(e) => setPlace(e.target.value)}
          />
          <label htmlFor="Get it">Founder</label>
          <input
            type="text"
            placeholder="Person who found it..."
            onChange={(e) => setPerson(e.target.value)}
          />
          <label htmlFor="Get it">Contact details</label>
          <input
            type="text"
            placeholder="Phone no, email, insta-username..."
            onChange={(e) => setCont(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Upload;
