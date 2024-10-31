import React, { useState, useEffect } from 'react';
//import { storage, db } from '../config/Config';
import Swal from 'sweetalert2';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, storage, ref } from '../config/firestore';

import { v4 } from 'uuid';
import { uploadBytes } from 'firebase/storage';


export const UploadForm1 = () => {

    const [img, setImg] = useState('')

    const handleClick = () => {

       const imgRef =  ref(storage,`files/${v4()})` )

       uploadBytes(imgRef, img)

    }

    return (
        <div className='App'>

            <input type='file' onChange={(e) => setImg(e.target.files[0])} />
            <button onClick={handleClick}>Upload</button>
        </div>
    )

}