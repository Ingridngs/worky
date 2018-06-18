import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='header'>
          <div className='container'>
            <div className='grid'>
              <div>
                <p>Articles Dashboard</p>
              </div>
              <div>
                <span>Logged as <strong>Ingrid Garcia</strong></span>
                <a href='#' className='header__link'><strong>Log out</strong></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;