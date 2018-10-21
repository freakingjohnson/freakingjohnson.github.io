import React from 'react';

const home = () => <div className='home-container'>
    <div className='white-box'>
        <h1>Nathan Johnson</h1>
        <img src={require('../../assets/icon.png')} alt=""/>
        <h4>Web Developer</h4>
        {/* <ul className="social">
            <li><a href="https://github.com/freakingjohnson" target="_blank" rel="noopener noreferrer"><i className="fab fa-3x fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/nathan-william-johnson/" target="_blank" rel="noopener noreferrer"><i className="fab fa-3x fa-linkedin"></i></a></li>
        </ul> */}
    </div>
</div>

export default home;