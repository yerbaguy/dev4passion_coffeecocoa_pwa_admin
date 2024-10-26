import React, { Component } from 'react';
//import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home'
import {AddProducts} from './components/AddProducts'
import { Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';;

//const { initializeApp } = require('firebase-admin/app');

export class App extends Component {






       render() {
         return (
           <Router>
		 <Routes>
		  <Route path='/' element={<Home/>} /><Route/>
		  <Route path='addproducts' element={<AddProducts/>} /><Route/>
		 </Routes>
           </Router>
	 )
       }
}

export default App

