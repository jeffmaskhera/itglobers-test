import React from 'react';
import "../css/header.css"
import img from "../tools/images";
import {Link} from "react-router-dom";

const Header =()=> {

    return (
        <>
            <header className="head">
                <div className="pos-logo">
                    <Link to="/">
                        <img className="logo" src={img.Logo} alt="Logo" />
                    </Link>
                </div>
            </header>
            <div className="hspace"></div>
        </>
    )
}
export default Header