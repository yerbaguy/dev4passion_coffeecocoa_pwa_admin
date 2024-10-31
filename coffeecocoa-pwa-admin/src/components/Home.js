import React from 'react';
import '../css/Home.css';
import {Navbar} from './Navbar';
import {Products} from './Products';
import UploadForm from './UploadForm';
import { UploadForm1 } from './UploadForm1';



export const Home = () => {

	return (
		//<div>
		// <Navbar/>
		// <Products/>
		//</div>

		<div className='wrapper'>
                 <Navbar/>
                 <Products/>
				 <UploadForm/>
				 <UploadForm1/>
				
                </div>
	)
}
