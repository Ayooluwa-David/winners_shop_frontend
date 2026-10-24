import React from 'react'

const Header = () => {
  return (
       <header className="py-5" style={{backgroundColor: '#001f4d'}}>
            <div className="container px-4 px-lg-5 my-5">
                 <div className="text-center text-white">
                     <h1 className="display-4 fw-bold">Welcome to Winners Store!</h1>

                     <p className="lead fw-normal text-white-75 mb-4">Discover the latest trends with Winners</p>
                     <a href="#shop" className="btn btn-light btn-lg rounded-pill px-4 py-4">Shop with Us</a>
                 </div>
            </div>
       </header>
  )
}

export default Header
