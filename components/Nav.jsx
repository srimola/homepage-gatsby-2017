import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

class Nav extends React.Component {
  constructor() {
    super();

    this.toggleNav = this.toggleNav.bind(this);
    this.resetNav = this.resetNav.bind(this);

    this.state = {
      nav_toggle_active: false
    };
  }

  toggleNav(e) {
    this.setState({ nav_toggle_active: !this.state.nav_toggle_active });
  }

  resetNav(e) {
    this.setState({ nav_toggle_active: false });
  }

  render () {
    return (
      <Headroom>
        <div className='hero is-dark'>
          <nav className="nav has-shadow">
            <div className="nav-left">
              <Link to='/' className='nav-item' activeClassName='is-active' onlyActiveOnIndex={true} onClick={this.resetNav}>
              Stefan Rimola
              </Link>
            </div>
            <span className={'nav-toggle' + (this.state.nav_toggle_active ? ' is-active' : '')} onClick={this.toggleNav}>
                <span/>
                <span/>
                <span/>
            </span>
            <div className={'nav-right nav-menu' + (this.state.nav_toggle_active ? ' is-active' : '')}>
              <Link to={prefixLink('/about/')} className='nav-item' activeClassName='is-active' onClick={this.toggleNav}>
              About
              </Link>
              <Link to={prefixLink('/contact/')} className='nav-item' activeClassName='is-active' onClick={this.toggleNav}>
              Contact
              </Link>
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

export default Nav;
