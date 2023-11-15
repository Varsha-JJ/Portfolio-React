import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import profile from '../Images/profile.png'
const Home = () => {
  return (
  
      <div className='main-body'>
        <div className="content-left">
          <div>
            <h5 className='title-content'>Hello<span className='lineUp '>&#128075;, </span>I'm</h5>
            <h1 className='typed-out'>Varsha JJ</h1>
            <p className='content-para'>I am a Frontend Developer</p>
            <button className='btn btn-style'>Contact me</button>
          </div>
        </div>
        <div className="content-right">
            <img src={profile} alt="" className='image-fluid' width="550px"height="500px" />
        </div>
      </div>

  )
}

export default Home
