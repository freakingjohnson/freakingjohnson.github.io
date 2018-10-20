import React from 'react';
import { Element } from 'react-scroll'
import CrossfadeImage from 'react-crossfade-image'

class about extends React.Component {
    constructor() {
        super()
        this.state = {
            selfiepic: require('../../assets/selfie1.png'),
            style: { width: '200px', height: 'auto' }
        }
    }
    mouseEvent = (e) => {
        let str = e.substring(0, e.length - 1)
        this.setState({
            [`${str}pic`]: require(`../../assets/${e}.png`)
        })
        console.log(this.state)
    }
    render() {
        return (
            <Element name='about'>
                <div className='outer-container light'>
                    <h2 className='element-name'>-About-</h2>
                    <div className='container'>
                        <span
                            className='self'
                            onMouseOver={() => this.mouseEvent('selfie2')}
                            onMouseOut={() => this.mouseEvent('selfie1')}
                        >
                            <CrossfadeImage
                                src={this.state.selfiepic}
                                alt=""
                                style={this.state.style}
                            />
                        </span>
                        <p style={{ color: 'black' }}>
                            I love to learn and love to code. I am always looking for new projects to work on in order to gain experience and learn new technologies. 
                        </p>
                    </div>
                </div>
            </Element>
        )
    }
}

export default about