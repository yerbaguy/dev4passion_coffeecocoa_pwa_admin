import React, { useState } from 'react';
import { getApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";

//const storage = getStorage();

// const firebaseApp = getApp();
// const storage = getStorage(firebaseApp, "gs://coffee-cocoa-database.appspot.com")

// console.log("storage", storage);


const metadata = {
    contentType: 'image/jpeg'
};





// const changeHandler = (e) => {

//     console.log("changed")

//     let selected = e.target.files[0];

//     console.log(selected);

//     if (selected && types.includes(selected.type)) {
//         setFile(selected)

//     } else {
//         setFile(null);
//         setError('Please select an image file (png or jpeg)');
//     }


// }

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

   // const [image, setImage] = useState(null);


    const types = ['imags/png', 'images/jpeg'];

    const firebaseApp = getApp();
    const storage = getStorage(firebaseApp, "gs://coffee-cocoa-database.appspot.com")

    console.log("storage", storage);

    const Ref = ref(storage, '/Users/bartosz/Downloads/bg.jpeg')








    // if (selected && types.includes(selected.type)) {
    //     setFile(selected)

    // } else {
    //     setFile(null);
    //     setError('Please select an image file (png or jpeg)');
    // }

    const changeHandler = (e) => {

        console.log("changed")

        let selected = e.target.files[0];

        console.log(selected);

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('');

        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }


       // let name = '/Users/bartosz/Downloads/bg.jpeg';



        // const storageRef = ref(storage, 'images/' + file.name);
        // const uploadTask = uploadBytesResumable(storageRef, file, metadata);


        // uploadTask.on('state_changed',
        //     (snapshot) => {
        //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (snapshot.state) {
        //             case 'paused':
        //                 console.log('Upload is paused');
        //                 break;
        //             case 'running':
        //                 console.log('Upload is running');
        //                 break;
        //         }
        //     },
        //     (error) => {
        //         // A full list of error codes is available at
        //         // https://firebase.google.com/docs/storage/web/handle-errors
        //         switch (error.code) {
        //             case 'storage/unauthorized':
        //                 // User doesn't have permission to access the object
        //                 break;
        //             case 'storage/canceled':
        //                 // User canceled the upload
        //                 break;

        //             // ...

        //             case 'storage/unknown':
        //                 // Unknown error occurred, inspect error.serverResponse
        //                 break;
        //         }
        //     },
        //     () => {
        //         // Upload completed successfully, now we can get the download URL
        //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             console.log('File available at', downloadURL);
        //         });
        //     }
        // );


    }



    return (
        <form>
            <input type='file' onChange={changeHandler}/>
            <div className='output'>

                { error && <div className='error'> {error}</div>}

                { file && <div className='error'> {file.name}</div>}

            </div>
        </form>
    )
}

export default UploadForm;