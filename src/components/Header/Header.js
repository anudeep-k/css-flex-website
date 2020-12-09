import React from 'react'
import { Link } from 'react-router-dom';
import  './header.css'


const Header = () => {
    return (
    
        <div>   
            <header className='header'> 
            <h4 className="header-item">Iphone12</h4> 
            <nav className="nav">
          <ul className="nav-links">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>          
            <h4>Welcome</h4>
          </ul>
          </nav>        
         
            </header>
            
        </div>
       
    )
}

export default Header
