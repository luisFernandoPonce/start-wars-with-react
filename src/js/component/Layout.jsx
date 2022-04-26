import React from "react";
import {Link, Outlet } from "react-router-dom";
import Navbar from "react-boostrap/Navbar"

const Layout = () => {
return (
    <div>
<h1> Star Wars app </h1>
<ul className="Nav">
    <li className="Nav-item">
        <link className="nav-link" to="/">
          Home
        </link>
    </li>
<li className="Nav-item">
<link className="nav-Link" to="/personas">
    Personas
</link>

</li>



</ul>

<Outlet />
    </div>
)



}
export default Layout;