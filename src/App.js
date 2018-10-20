import React from 'react';
import Menu from './comps/Menu/Menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUserCircle, faJournalWhills, faComments } from '@fortawesome/free-solid-svg-icons'
import Home from './comps/Home/Home';
import About from './comps/About/About';
import Portfolio from './comps/Portfolio/Portfolio'

library.add(faHome, faUserCircle, faJournalWhills, faComments)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="imagediv">
          <img src={require('./assets/react-logo.png')} alt="" />
          <img src={require('./assets/node.png')} alt="" />
          <img src={require('./assets/postgresql.png')} alt="" />
          <img src={require('./assets/redux.png')} alt="" />
          <img src={require('./assets/mui.png')} alt="" />
          <img src={require('./assets/socket.png')} alt="" />
          <img src={require('./assets/bloggy1ss.png')} alt="" />
          <img src={require('./assets/bloggy2ss.png')} alt="" />
          <img src={require('./assets/build1ss.png')} alt="" />
          <img src={require('./assets/build2ss.png')} alt="" />
          <img src={require('./assets/bloggyblog1ss.png')} alt="" />
          <img src={require('./assets/bloggyblog2ss.png')} alt="" />
          <img src={require('./assets/selfie1.png')} alt="" />
          <img src={require('./assets/selfie2.png')} alt="" />
          <img src={require('./assets/icon.png')} alt=""/>
        </div>
        <Menu />
        <Home id='home' />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
