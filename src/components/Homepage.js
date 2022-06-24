import React from 'react'
import logo from '../oyo-logo.png';


export default function Homepage() {
    return (
        <body className = "Homepage">
            <img className = "oyo-logo" src={logo} alt = "OYO Storefront logo"/>
            <h1>OWN YOUR OWN</h1>
            <h2>Restaurant Competition</h2>
        </body>
    );
}
