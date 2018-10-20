import React from 'react';
import { Element } from 'react-scroll'
import CrossfadeImage from 'react-crossfade-image'

class Portfolio extends React.Component {
    constructor() {
        super()
        this.state = {
            buildpic: require('../../assets/build1ss.png'),
            bloggyblogpic: require('../../assets/bloggyblog1ss.png'),
            bloggypic: require('../../assets/bloggy1ss.png'),
            style: { img: { maxHeight: '275px', maxWidth: '235px', marginBottom: '10px' } }
        }
    }
    mouseEvent = (e) => {
        let str = e.substring(0, e.length - 1)
        this.setState({
            [`${str}pic`]: require(`../../assets/${e}ss.png`)
        })
        console.log(this.state)
    }

    render() {
        return (
            <Element name="portfolio">
                <div className='outer-container dark'>
                    <h2 className='element-name'>-Portfolio-</h2>
                    <br />
                    <h4 className='element-name'>Builders Independent</h4>
                    <div className='container'>
                        <p>Developed as a group project for DevMountain. A social media/classifieds app to connect independent laborers with clients. API allows to create profile either as a "pro" or a "user", pros can create a profile to showcase their work and provide information as well as set up Stripe to collect credit card payments.
                            <br />

                            <h5>Technologies used:</h5>
                            <img src={require('../../assets/react-logo.png')} alt="" />
                            <img src={require('../../assets/node.png')} alt="" />
                            <img src={require('../../assets/postgresql.png')} alt="" />
                            <img src={require('../../assets/redux.png')} alt="" />
                            <img src={require('../../assets/mui.png')} alt="" />
                        </p>
                        <a href="http://www.buildersindependent.gq" target="_blank" rel="noopener noreferrer"
                            className='proj-pic'
                            onMouseOver={() => this.mouseEvent('build2')}
                            onMouseOut={() => this.mouseEvent('build1')}>
                            <CrossfadeImage
                                src={this.state.buildpic}
                                alt=""
                                style={this.state.style.img}
                            />
                        </a>
                        <a href="https://github.com/freakingjohnson/unlicensed" target="_blank" rel="noopener noreferrer" className="gittyup"><i className="fab fa-3x fa-github"></i></a>
                    </div>
                    <br />
                    <h4 className='element-name'>BloggyBlog2</h4>
                    <div className='container'>
                        <a href="https://github.com/freakingjohnson/blogv2" target="_blank" rel="noopener noreferrer" className="gittydown white"><i className="fab fa-3x fa-github"></i></a>
                        <a href="http://165.227.53.23:3006/" target="_blank" rel="noopener noreferrer"
                            className='proj-pic'
                            onMouseOver={() => this.mouseEvent('bloggyblog2')}
                            onMouseOut={() => this.mouseEvent('bloggyblog1')}>
                            <CrossfadeImage
                                src={this.state.bloggyblogpic}
                                alt=""
                                style={this.state.style.img}
                            />
                        </a>
                        <p>Blog app with API to create/update blogs, add images to gallery, with redux for state management and a simple socket.io chatboard. Rebuild of personal project done at DevMountain. (No auth set up for admin).
                            <br />
                            <h5>Technologies used:</h5>
                            <img src={require('../../assets/react-logo.png')} alt="" />
                            <img src={require('../../assets/node.png')} alt="" />
                            <img src={require('../../assets/postgresql.png')} alt="" />
                            <img src={require('../../assets/redux.png')} alt="" />
                            <img src={require('../../assets/mui.png')} alt="" />
                            <img src={require('../../assets/socket.png')} alt="" />
                        </p>
                    </div>
                    <br />
                    <h4 className='element-name'>BloggyBlog</h4>
                    <div className='container'>
                        <p>Personal project for DevMountain. Blog app with API to create/update blogs, add images to gallery, with redux for state management, uses Auth0 for admin section.
                            <br />
                            <h5>Technologies used:</h5>
                            <img src={require('../../assets/react-logo.png')} alt="" />
                            <img src={require('../../assets/node.png')} alt="" />
                            <img src={require('../../assets/postgresql.png')} alt="" />
                            <img src={require('../../assets/redux.png')} alt="" />
                            <img src={require('../../assets/mui.png')} alt="" />
                            <img src={require('../../assets/css3.png')} alt="" />
                        </p>
                        <a href="http://bloggyblogblog.gq" target="_blank" rel="noopener noreferrer"
                            className='proj-pic'
                            onMouseOver={() => this.mouseEvent('bloggy2')}
                            onMouseOut={() => this.mouseEvent('bloggy1')}>
                            <CrossfadeImage
                                src={this.state.bloggypic}
                                alt=""
                                style={this.state.style.img}
                            />
                        </a>
                        <a href="https://github.com/freakingjohnson/bloggyblog" target="_blank" rel="noopener noreferrer" className="gittyup white"><i className="fab fa-3x fa-github"></i></a>
                    </div>
                </div>
            </Element>
        )
    }
}


export default Portfolio;