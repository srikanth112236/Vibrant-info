import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
  <div className="container mx-auto">
    <Link to='/' className="navbar-brand lead fw-bolder" href="#">Vibrant Infos</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/adddata' className="nav-link active lead fw-500" aria-current="page" href="#">Add</Link>
        </li>
        <li className="nav-item">
        <Link to='/editdata' className="nav-link active lead fw-500" aria-current="page" href="#">Edit</Link>

        </li>
      
        
      </ul>
    
    </div>
  </div>
</nav>
  </>
  )
}

export default Header