import React from 'react'
import logo from'./logoc.png'

export default function Nav() {
    const navStyle = {
        color: 'rgb(229, 9, 20)'

    }
    return (
        <nav>
            <input type="image" src={logo} alt="Submit" height="42" width="42"/>
            <ul className="nav-links">
            <input type="text" placeholder="Search.." name="search"/>

                     <li style={navStyle}>Categories</li>
                    <li style={navStyle}>Whishlist</li>

                    <li style={navStyle}>SignUp</li>
                    <li style={navStyle}>SignIn</li>
                    <li style={navStyle}>AboutUs</li>

            </ul>
        </nav>
    )
}

