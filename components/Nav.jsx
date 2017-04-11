import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

export default class Nav extends React.Component {
  constructor() {
    super();

    this.toggleNav = this.toggleNav.bind(this);
    this.resetNav = this.resetNav.bind(this);

    this.state = {
      nav_toggle_active: false
    };
  }

  toggleNav(e) {
    let nav_toggle_state = this.state.nav_toggle_active;
    this.setState({ nav_toggle_active: !nav_toggle_state });
  }

  resetNav(e) {
    this.setState({ nav_toggle_active: false });
  }

  render () {
    return (
      <Headroom>
        <div className='hero is-dark is-bold' >
          <nav className="nav has-shadow">
            <div className="nav-left">
              <Link to='/' className='nav-item' activeClassName='is-active' onlyActiveOnIndex={true} onClick={this.resetNav}>
              <span>Stefan Rimola</span>
              </Link>
            </div>
            <span className={'nav-toggle' + (this.state.nav_toggle_active ? ' is-active' : '')} onClick={this.toggleNav}>
                <span/>
                <span/>
                <span/>
            </span>
            <div className={'nav-right nav-menu' + (this.state.nav_toggle_active ? ' is-active' : '')}>
              <span className='nav-item'>
                <a href='https://github.com/srimola' className='button is-dark is-inverted' target="_blank">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                </a>
                <a href='https://twitter.com/lok1vip' id='twitter' className='button is-dark is-inverted' target="_blank">
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
                </a>
              </span>
            </div>
          </nav>
        </div>
      </Headroom>
    )
  }
}

Nav.propTypes = {
  children: React.PropTypes.any,
}
