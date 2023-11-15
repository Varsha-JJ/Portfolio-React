import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container-fluid'>
       <div className='main-navbar'>
            <div className='left-header'>
                <h1 className='heading'>Varsha</h1>
            </div>
            <div className='right-header'>
                <div className='text-box'><Link to="home"><p className='items'>Home</p></Link></div>
                <div className='text-box'><Link to="projects"><p className='items'>Projects</p></Link></div>
                <div className='text-box'><Link to="about"><p className='items'>About</p></Link></div>
                <div className='text-box'><Link to="contact"><p className='items'>Contact</p></Link></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
