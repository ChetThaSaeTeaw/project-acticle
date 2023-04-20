import React , { useState } from 'react';
import { Link } from 'react-router-dom';

// CSS
import "./Navbar.scss";

// Icons
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

// Images
import brandLogo from '../../assets/Images/etc/Logo-2.png';

function Navbar() {

    const [ showNavbar , setShowNavbar ] = useState(false);

    const navbarList = [
        { id : 1 , title : "รีวิวหนัง" , linkTo : "/"},
        { id : 2 , title : "รีวิวซีรีย์" , linkTo : "/series"},
        { id : 3 , title : "รีวิวnetflix" , linkTo : "/netflix"},
        { id : 4 , title : "รีวิวอนิเมะ" , linkTo : "/anime"},
    ]

  return (
    <nav className='navbar-top-container'>
        <Submenu navbarList={navbarList}  showNavbar={showNavbar} />
        <div className='navbar-top-logo-box'>
            <Link to="/">
                <img src={brandLogo} alt="brand-logo" loading='lazy' />
            </Link>
        </div>
        <ul className='navbar-top-menu-box'>
            {navbarList.map((menu , index) => {
                return (
                    <li key={index}>
                        <Link to={menu.linkTo}>{menu.title}</Link>
                    </li>
                )
            })}
        </ul>
        <div className='navbar-top-submenu-icon'>
            <span onClick={() => setShowNavbar(!showNavbar)}>{!showNavbar ? <FaBars /> : <MdClose /> }</span>
        </div>
    </nav>
  );
};

const Submenu = ({ navbarList ,  showNavbar }) => {
    return (
        <nav className='submenu-container' style={!showNavbar ? null : { transform : 'translateX(0)' } } >
            <ul>
                {navbarList.map((title , index) => {
                    return (
                        <li key={index}>
                            <Link to={title.linkTo}>{title.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;