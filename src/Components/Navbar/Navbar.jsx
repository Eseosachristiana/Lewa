import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assests/Images/logo.png'
import cart from '../Assests/Images/cart2.png'


const Navbar = () => {
    //const setMenu = [menu, setMenu] = useState("home")
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" style={{ width: "100px", height: "70px" }} />
                Shop_W_Lewa
            </div>
            <div className="nav-menu">
                <li>
                    Home
                </li>
                <li>Bags</li>
                <li>Dresses</li>
                <li>Shoes</li>
                <li>About Us</li>
            </div>
            <div className="nav-cart">
                <button>Login</button>
                <img src={cart} alt="" style={{ width: "50px", height: "50px" }} />
            </div>
        </div>
    );
}

export default Navbar;