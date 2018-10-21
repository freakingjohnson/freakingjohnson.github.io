import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll as scroll, scroller } from 'react-scroll'


class List extends React.Component {

  componentDidMount() {
    scroll.scrollToTop()
  }
  render() {
    const {
      menuOpen, toggleMenu,
    } = this.props

    let visibility = 'hide';

    if (menuOpen) {
      visibility = 'show';
    }

    return (
      <div>
        <div
          id="overlay"
          className={visibility}
          onClick={toggleMenu}
        />
        <div
          id="flyout"
          className={visibility}
          onClick={toggleMenu}
        >
          <div
            className='links'
            onClick={() => scroll.scrollToTop()}
          >
          <h2>
            <FontAwesomeIcon icon="home" />&nbsp;
              Home
          </h2>
          </div>
          <div
            className='links'
            onClick={()=> scroller.scrollTo('about', {
              smooth:true
            }
            )}
          >
          <h2>
            <FontAwesomeIcon icon="user-circle" />&nbsp;
              About
          </h2>
          </div>
          <div
            className='links'
            onClick={()=> scroller.scrollTo('portfolio', {
              smooth:true
            }
            )}
          >
          <h2>
            <FontAwesomeIcon icon="journal-whills" />&nbsp;
              Projects
          </h2>
          </div>
          <div
            className='links'
            onClick={()=> scroller.scrollTo('contact', {
              smooth:true
            }
            )}
          >
          <h2>
            <FontAwesomeIcon icon="comments" />&nbsp;
              Hire Me
          </h2>
          </div>
        </div>
         
      </div>
    );
  }
}

export default List;