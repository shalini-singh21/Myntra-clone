import React from "react";
import logo from "../images/logo.jpg"
const Navbar = () => {
    return (
        <>
            <div className="navbar">

                <ul className="navbar-items text-sm font-bold text-gray-700 items-center">
                    <img src={logo} className="logo" />
                    <li><a className="nav-link m1-8" href="/men">MEN</a></li>
                    <li><a className="nav-link m1-8" href="/kids">KIDS</a></li>
                    <li><a className="nav-link m1-4" href="/Home">HOME & LIVING</a></li>
                    <li><a className="nav-link m1-8" href="/beauty">BEAUTY</a></li>
                    <li><a className="nav-link m1-8" href="/studio">STUDIO</a></li>
                    <input className="searchbar" type="text" placeholder="Search for products,brands and more"></input>
                    <li><a className="nav-link m1-8" href="/wishlist"> WISHLIST</a></li>
                    <li><a className="nav-link m1-8" href="/bag"> BAG</a></li>
                    <li><a className="nav-link m1-8" href="/profile">PROFILE </a></li>
                </ul>
            </div>
        </>
    )
}
export default Navbar;
