import React from 'react'
import {FaCartShopping} from  'react-icons/fa6';
import {Link} from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (

    <div>
          <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
            <div className="container">
                <Link className="navbar-brand fw-bold" to="">
                 Winners Shop
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon">
                   </span>
                </button>

                <div className="collapse- navbar-collapse" id="navbarContent">
                   <NavLink></NavLink>
                   <Link to="/cart" className={` btn btn-dark ms-3 rounded-pill position-relative ${styles.responsiveCart}`}>
                      <FaCartShopping></FaCartShopping>
                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{fontSize: '0.85rem', padding:'0.5em 0.65em', backgroundColor: '#001f4d'}}>
                       12
                   </span>
                   
                   
                   </Link>
                  
                </div>
            </div>

          </nav>
    </div>

  )
}

export default NavBar
