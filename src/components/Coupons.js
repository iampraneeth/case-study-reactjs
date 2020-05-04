import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Nav from './Nav';
import './Coupons.css'
import Footer from './Footer';

function Coupons() {
    return (

        <div className="App">

            <Nav />
            <Footer/>
            <Signin />
            <Signup />

        </div>

    );
}

export default Coupons;