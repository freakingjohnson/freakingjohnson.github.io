import React from 'react';
import Menu from './comps/Menu/Menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Home from './comps/Home/Home';
import About from './comps/About/About';

library.add(faHome, faUserCircle)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Home id='home'/>
        <About />
      </div>
    );
  }
}

export default App;
