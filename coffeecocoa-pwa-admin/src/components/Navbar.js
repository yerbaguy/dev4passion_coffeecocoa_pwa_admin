import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
        
        return (
                //<div>
		//Navbar
                //</div>

		<div className='navbax'>
		 <div className='leftside'></div>
		 <div className='rightside'>
                    <Link to='/signup' className='navlinks'>Sign Up</Link>
		    <Link to='/login' className='navlinks'>Login</Link>
		 </div>
                </div>
        )
}       
