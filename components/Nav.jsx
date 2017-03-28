import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <Headroom> 
        <div className='hero is-dark is-bold'>
          <nav className="nav has-shadow">
            <div className="nav-left">
              <Link to='/' className='nav-item' activeClassName='is-active' onlyActiveOnIndex={true}>
              Stefan Rimola
              </Link>
            </div>
            <span className="nav-toggle" onClick={() => this.handleNavToggle()}>
                <span/>
                <span/>
                <span/>
            </span>
            <div className="nav-right nav-menu">
              <Link to={prefixLink('/about/')} className='nav-item' activeClassName='is-active'>
              About
              </Link>
              <Link to={prefixLink('/contact/')} className='nav-item' activeClassName='is-active'>
              Contact
              </Link>
              <span className='nav-item'>
                <a href='https://github.com/srimola' className='button is-dark is-inverted'>
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                <span>Github</span>
                </a>
              </span>
            </div>
          </nav>
        </div>
      </Headroom>
    )
  },
})

