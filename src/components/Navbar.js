import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import React from 'react'


function Navbar(props){


  return(
    <>
    <nav id="navbar" style={{backgroundColor: props.mode === 'light'?'white':'#2d2f3b',color: props.mode === 'light'?'black':'white'}}>
    <div id="hamburgur-main">
        <div className="hamburgur">
            <div className="line first"></div>
            <div className="line second"></div>
            <div className="line third"></div>
        </div>
    </div>
    <div className="logo"><span>{props.logo1}</span> {props.logo2}</div>
    <div className="menu">
    <ul className="menu-ul">
            <li><Link to="/" className="active-menu menu-a"  style={{color: props.mode === 'light'? 'black' : 'white'}}>Home</Link></li>
            <li><Link className="menu-a" to="/"  style={{color: props.mode === 'light'? 'black' : 'white'}}>About</Link></li>
            <li><Link className="menu-a" to="/Contact"  style={{color: props.mode === 'light'? 'black' : 'white'}}>Contact</Link></li>            
        </ul>
    </div>

    <div className="icons" onClick={props.changeMode}>
        <i className="fa-regular fa-moon moon-icon"></i>
        {/* <i className="fa-regular fa-moon moon-icon"></i> */}
    </div>



</nav>

<div className="mobile-menu">
    <ul className="mobile-menu-ul">
        <li className="mobile-menu-li"><a href="/" className="mobile-menu-a">Home</a></li>
        <li className="mobile-dropdown-menu">
            <a href="/" className="mobile-menu-a">Shop</a><i className="fa-solid fa-caret-right arrow"></i>
            <ul className="mobile-menu-dropdown-main">
                <li className="dropdown-li"><a href="/" className="mobile-menu-a mobile-menu-dropdown-a">Catrgory 1</a></li>
                <li className="dropdown-li"><a href="/" className="mobile-menu-a mobile-menu-dropdown-a">Catrgory 2</a></li>
                <li className="dropdown-li"><a href="/" className="mobile-menu-a mobile-menu-dropdown-a">Catrgory 3</a></li>
            </ul>
        </li>
        <li className="mobile-menu-li"><a className="mobile-menu-a mobile-hot" href="/">Features</a></li>
        <li className="mobile-menu-li"><a className="mobile-menu-a" href="/">Mu Account</a></li>
        <li className="mobile-menu-li"><a className="mobile-menu-a" href="/">About</a></li>
        <li className="mobile-menu-li"><a className="mobile-menu-a" href="/">Contact</a></li>
    </ul>   
 </div>
 </>

  );

}

Navbar.protoType = {
    logo1: PropTypes.string.isRequired,
    logo2: PropTypes.string
}

Navbar.defaultProps = {
    logo1: "Logo1",
    logo2: "Logo2"
}

export default Navbar;