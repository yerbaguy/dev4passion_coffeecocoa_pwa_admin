import React, { useState } from 'react';
import { storage, db } from '../Config/Config';



export const AddProducts = () => {

	return (

		//<div>
		//add products
		//</div>
		<div classNam="container">
		<br/>
		<h2>Add Products</h2>
		<br/>
		<form autoComplete="off" className='form-group'>
		 <label htmlFor="product-name">Product Name</label>
		 <input type="text" className='form-control' />

		 <label htmlFor="product-price">Product Price</label>
                 <input type="number" className='form-control' />

		 <label htmlFor="product-img">Product Image</label>
                 <input type="file" className='form-control' id="file" /> 

		 <button type="submit" className='btn btn-success btn-md mybtn'>Add</button>
		</form>
		</div>
	)


}
