import React, { useState, useEffect } from 'react';
//import { storage, db } from '../config/Config';
import Swal from 'sweetalert2';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../config/firestore';
import { data } from '@remix-run/router';


export const AddProducts = ({setIsAdding}) => {


        const [employees, setEmployees] = useState([]); 
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [salary, setSalary] = useState();
	const [date, setDate] = useState();

	//const [employees, setEmployees] = useState();

	const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');


	const types = ['image/png', 'image/jpeg']; // image types
	


	const handleAdd = async(e) => {
		e.preventDefault();

		if (!firstName || !lastName || !email || !salary || !date) {

		
	        	return Swal.fire({

		        	icon: 'error',
			        title: 'error',
		        	text: 'All fields are required',
			        showConfirmButton: true,
	        	});
		}
	//}

	const newEmployee = {

		firstName,
		lastName,
		email,
		salary,
		date,
	};


		console.log(newEmployee);

	employees.push(newEmployee);

	try {
		
		await addDoc(collection(db, "employees"), {

		...newEmployee
		//firstName: "eeeee",
		//lastNam: "fffff",
		});
	} catch(error) {

		console.log(error);
	}

	Swal.fire({

		icon: 'success',
		title: 'added',
		text: `${firstName} ${lastName}'s data has been Added.`,
		showConfirmButton: false,
		timer: 1500,
	});
        };



	const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }



	const getEmployees = async () => {
	
		const querySnapshot = await getDocs(collection(db, "employees"));

    const employees = querySnapshot.docs.map( doc => ({id: doc.id, ...doc.data()}))

		// querySnapshot.forEach((doc) => {


		// 	console.log(doc.id, "=>", doc.data());

		// });

		setEmployees(employees)

		console.log("lkjasdlfkj")

	}

useEffect(() => {

	getEmployees()
}, [])


//	const addProduct = (e) => {
//        e.preventDefault();
//        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
//        uploadTask.on('state_changed', snapshot => {
//            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//            console.log(progress);
//        }, err => setError(err.message)
//            , () => {
//                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
//                    db.collection('Products').add({
//                        ProductName: productName,
//                        ProductPrice: Number(productPrice),
//                        ProductImg: url
//                    }).then(() => {
//                        setProductName('');
//                        setProductPrice(0)
//                        setProductImg('');
//                        setError('');
//                        document.getElementById('file').value = '';
//                    }).catch(err => setError(err.message))
//                })
//            })
//    }

	return (

		//<div>
		//add products
		//</div>
		<div className="container">
		<br/>
		<h2>Add Products</h2>
		<br/>

		<form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>




       ////here/////



      <div className="contain-table">
        <table className="striped-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Date</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees ? (
              employees.map((employee, i) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  {/* <td>{formatter.format(employee.salary)}</td> */}
                  <td>{employee.salary}</td>
                  <td>{employee.date} </td>
                  <td className="text-right">
                    <button
                      // onClick={() => handleEdit(employee.id)}
                      // className="button muted-button"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="text-left">
                    <button
                      // onClick={() => handleDelete(employee.id)}
                      // className="button muted-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


       /////here////








		</div>



  






   


  ////here















)
		//<form autoComplete="off" className='form-group'>
		// <label htmlFor="product-name">Product Name</label>
		// <input type="text" className='form-control' required
		// onChange={(e) => setProductName(e.target.value)} value={productName} />

		// <label htmlFor="product-price">Product Price</label>
                // <input type="number" className='form-control' required
		//  onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />

		// <label htmlFor="product-img">Product Image</label>
                // <input type="file" className='form-control' id="file" required
		//  onChange={productImgHandler} /> 

		// <button type="submit" className='btn btn-success btn-md mybtn'>Add</button>
		//</form>


		//here
		//<form autoComplete="off" className='form-group' onSubmit={handleAdd}>
                // <label htmlFor="firstName">FirtName</label>
                // <input id="firstName" type="text" nam="firstName" value={firstName} className='form-control' required
                // onChange={(e) => setFirstName(e.target.value)} value={firstName} />

                // <label htmlFor="lastName">LastName</label>
                // <input id="lastName" type="text" name="lastName" valu={lastName} className='form-control' required
                //  onChange={(e) => setLastName(e.target.value)} value={lastName} />

                // <label htmlFor="email">email</label>
                // <input id="email" type="text" name="email" value={email}className='form-control' id="file" required
                //  onChange={(e) => setEmail(e.target.value)} value={email}} />

	        // <label htmlFor="salary">salary</label>
                // <input id="salary" type="numbr" name="salary" value={salary} className='form-control' id="file" required
                //  onChange={(e) => setSalary(e.target.value)} value={salary}} />

	        // <label htmlFor="date">date</label>
                // <input id="date" type="date" name="date" value={date}className='form-control' id="file" required
                //  onChange={(e) => setDate(e.target.value)} value={date} />

                // <button type="submit" className='btn btn-success btn-md mybtn'>Add</button>
                //</form>

	//	lkjasdlfkj

		//{error && <span className='error-msg'>{error}</span>}
		//</div>
	//)


}
