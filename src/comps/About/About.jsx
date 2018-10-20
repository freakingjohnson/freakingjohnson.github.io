import React from 'react';
import { Element } from 'react-scroll'

const about = () => <Element name='about'>
    <h2 className='element-name'>-About-</h2>
    <div className='about-container'>
        <img src={require('../../assets/download.png')} alt="" className='self' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id sodales dolor, eget facilisis erat. Ut vulputate commodo aliquam. Aenean et magna id dolor porta eleifend eget vel eros. Duis placerat, dolor aliquam condimentum sollicitudin, dolor neque iaculis massa, id viverra velit nulla ac libero. Mauris non mi sapien. Integer sollicitudin neque vel gravida posuere. Vivamus id vehicula nibh, sed porta velit. Aliquam et mauris nunc. Donec eu felis non eros finibus tincidunt cursus a dolor. Fusce in molestie ante. Nam a dolor non lacus blandit posuere lacinia vel est. Aliquam sed metus blandit, scelerisque nisi et, condimentum libero. Aliquam viverra hendrerit ex. Ut tempus rhoncus nisl ultricies vehicula.</p>
    </div>
</Element>
export default about