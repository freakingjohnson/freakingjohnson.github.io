import React from 'react';
import { Element } from 'react-scroll'

const contact = () => <div className='outer-container light'>
    <Element name='contact'>
        <h2 className='element-name'>Hire Me</h2>
        <div className='container justify'>
            <div className='white-box'>
                <h4>Send me an email, check out my code, or connect with me on LinkedIn.</h4>
                <ul className="social">
                    <li><a href="mailto:nathanwjohnson42@gmail.com"><i className="fas fa-3x fa-at"></i></a></li>
                    <li><a href="https://github.com/freakingjohnson" target="_blank" rel="noopener noreferrer"><i className="fab fa-3x fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/nathan-william-johnson/" target="_blank" rel="noopener noreferrer"><i className="fab fa-3x fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br/>
          <br/>
          <br/>
    </Element>
</div>

export default contact;