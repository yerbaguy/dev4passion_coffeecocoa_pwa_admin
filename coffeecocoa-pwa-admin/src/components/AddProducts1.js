import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../config/firestore';


export const AddProducts1 = ({setIsAdding}) => {


    const [coffeeRoaster, setCoffeeRoaster] = useState([]); 
    const [show, setShow] = useState(true)
    const [productDescription, setProductDescription] = useState('');
    const [farm, setFarm] = useState('');
    const [farmer, setFarmer] = useState('');
    const [roaster, setRoaster] = useState('');

    const handleAddRoastedCoffee = async(e) => {

        e.preventDefault();

        if (!productDescription || !farm || !farmer || !roaster) {

            return Swal.fire({

                icon: 'error',
                title: 'error',
                text: 'All fields are required',
                showConfirmButton: true,
            });
        }

        const newProductRoaster = {

            productDescription,
            farm,
            farmer,
            roaster
        }

        console.log("newProductRoastr", newProductRoaster);

        //coffeeRoaster.push(newProductRoaster);

        try {
            await addDoc(collection(db, "products"), {

                ...newProductRoaster
            })
        } catch (error) {
            console.log(error);
        }



    }

    const handleAddGreenCoffee = async (e) => {

        e.preventDefault();

        if (!productDescription || !farm || !farmer ) {

            return Swal.fire({

                icon: 'error',
                title: 'error',
                text: 'All fields are required',
                showConfirmButton: true,
            });
        }

        const newProductRoaster = {

            productDescription,
            farm,
            farmer,
        }

        console.log("newProductRoastr", newProductRoaster);

        //coffeeRoaster.push(newProductRoaster);

        try {
            await addDoc(collection(db, "products"), {

                ...newProductRoaster
            })
        } catch (error) {
            console.log(error);
        }



    }

    return (
        <div className='AddProducts1'>
        {
            // show?<h1>hello world</h1>:null
            // show ? <h1>hello world</h1> : <h1>kdkdkk</h1>
                show ? 
                    <form onSubmit={handleAddRoastedCoffee}>

                        <input
                            id="productDescription"
                            type="text"
                            name="productDescription"
                            value={productDescription}
                            onChange={e => setProductDescription(e.target.value)}
                        />

                        <input
                            id="farm"
                            type="text"
                            name="farm"
                            value={farm}
                            onChange={e => setFarm(e.target.value)}
                        />
                        <input
                            id="farmer"
                            type="text"
                            name="farmer"
                            value={farmer}
                            onChange={e => setFarmer(e.target.value)}
                        />

                        <input
                            id="roastr"
                            type="text"
                            name="roaster"
                            value={roaster}
                            onChange={e => setRoaster(e.target.value)}
                        />

                        <input type="submit" value="Add" />
                        <input
                            style={{ marginLeft: '12px' }}
                            className="muted-button"
                            type="button"
                            value="Cancel"
                            onClick={() => setIsAdding(false)}
                        />

                </form>
                
                
                
                
                
                : 
                    <form onSubmit={handleAddGreenCoffee}>
                        <input
                            id="productDescription"
                            type="text"
                            name="productDescription"
                            value={productDescription}
                            onChange={e => setProductDescription(e.target.value)}
                        />

                        <input
                            id="farm"
                            type="text"
                            name="farm"
                            value={farm}
                            onChange={e => setFarm(e.target.value)}
                        />
                        <input
                            id="farmer"
                            type="text"
                            name="farmer"
                            value={farmer}
                            onChange={e => setFarmer(e.target.value)}
                        />

                        <input type="submit" value="Add" />
                        <input
                            style={{ marginLeft: '12px' }}
                            className="muted-button"
                            type="button"
                            value="Cancel"
                            onClick={() => setIsAdding(false)}
                        />
                        

                    </form>

        }
        <button onClick={()=> setShow(true)}>show</button>
        <button onClick={()=> setShow(false)}>hide</button>
        </div>
    )
}