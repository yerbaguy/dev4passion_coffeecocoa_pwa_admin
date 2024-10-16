import React from 'react';
import '../css/Home.css';
import {Navbar} from './Navbar';
import {Products} from './Products';


export const Home = () => {

	return (
		//<div>
		// <Navbar/>
		// <Products/>
		//</div>

		<div className='wrapper'>
                 <Navbar/>
                 <Products/>
                </div>
	)
}
