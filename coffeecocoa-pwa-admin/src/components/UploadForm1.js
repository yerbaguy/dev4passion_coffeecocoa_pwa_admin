import React, { useState, useEffect } from 'react';
//import { storage, db } from '../config/Config';
import Swal from 'sweetalert2';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, storage, ref, getDownloadURL } from '../config/firestore';

import { v4 } from 'uuid';
import { uploadBytes } from 'firebase/storage';


export const UploadForm1 = () => {

    const [img, setImg] = useState('')
    const [imageurl, setImageurl] = useState();

    const handleClick = async () => {

       const imgRef =  ref(storage,`files/${v4()})` )

       uploadBytes(imgRef, img)

    //    const url = await storage().ref(imgRef).getDownloadURL();

    //    console.log(url);
           console.log("imageRef", imgRef.fullPath);

           const imageurl = await imgRef.fullPath

           setImageurl(imageurl);

           console.log("imgfulpath", img);

        //    <img src={imageurl} />

        //    const imageURL = await getDownloadURL(ref(storage(imgRef)));
        //    await imageURL;



        //    storage.ref(imgRef.fullPath).getDownloadURL();

        //const storage = getStorage();


        // getDownloadURL(ref(storage, imgRef.fullPath))
        //     .then((url) => {
        //         // `url` is the download URL for 'images/stars.jpg'

        //         // This can be downloaded directly:
        //         const xhr = new XMLHttpRequest();
        //         xhr.responseType = 'blob';
        //         xhr.onload = (event) => {
        //             const blob = xhr.response;
        //         };
        //         xhr.open('GET', url);
        //         xhr.send();

        //         // Or inserted into an <img> element
        //         // const img = document.getElementById('myimg');
        //         const img = document.getElementById(url);
        //         img.setAttribute('src', url);
        //         console.log("url", url);
        //     })
        //     .catch((error) => {
        //         console.log("error", error);
        //         // Handle any errors
        //     });












    }

    return (
        <div className='App'>

            <input type='file' onChange={(e) => setImg(e.target.files[0])} />
            <button onClick={handleClick}>Upload</button>
            <img src={imageurl} />
        </div>
    )

}