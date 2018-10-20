import React from 'react';
import MenuButton from './MenuButton';
import List from './List';
import ICON from '../../assets/icons.json'

const Snap = require('snapsvg-cjs');

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      bool: false,
    };
  }

  animated = (elemId, pId, icon, cond, int) => {
    const svg = document.getElementById(elemId)
    const { select } = Snap;
    Snap(svg);
    if (!cond) {
      select(`#${pId}`).animate({ d: icon.after }, int)
    } else if (cond) {
      select(`#${pId}`).animate({ d: icon.before }, int)
    }
  }

  toggleMenu = () => {
    const { open } = this.state
    this.setState({
      open: !open,
    });
    this.animated('icon', 'hamburger', ICON.icon, open, 500)
  }

  toggleIcon = (a, b, c, d, e) => {
    const { bool } = this.state
    this.setState({
      bool: !bool,
    })
    this.animated(a, b, c, d, e)
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <MenuButton
          toggleMenu={this.toggleMenu}
          menuOpen={open}
        />
        <List
          toggleMenu={this.toggleMenu}
          menuOpen={open}
        />
      </div>
    );
  }
}

export default Menu;
