import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
     <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div className='container has-text-centered'>
          <figure className="image is-256x256" style={{display: 'inline-block'}}>
            <img src='stefan.jpg' />
          </figure>
          <p>
            <span className='title'>Stefan Rimola</span><br/>
            <span className='subtitle'><strong>San Francisco, CA</strong></span><br/>
          </p>
          <div className="hero-buttons">
              <a href='#about' className='nav-item' onClick={this.toggleNav} className='button is-dark is-inverted invert-me-on-hover'>
              <span className="icon">
                <i className="fa fa-address-card-o" aria-hidden="true"></i>
              </span>
              <span>&nbsp;About</span>
              </a>
              <a href='#contact' className='nav-item' onClick={this.toggleNav} className='button is-dark is-inverted invert-me-on-hover'>
              <span className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
              <span>&nbsp;Contact</span>
              </a>
          </div>
          <div className="hero-buttons">
              <a href='https://github.com/srimola' target='_blank' className='button invert-me-on-hover is-dark is-inverted is-small'>
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
              <span>&nbsp;Github</span>
              </a>
              <a href='https://twitter.com/lok1vip' target='_blank' className='button is-dark is-inverted is-small twitter invert-me-on-hover'>
              <span className="icon" id='twitter' style={{'pointerEvents': 'none',}}>
                <i className="fa fa-twitter"></i>
              </span>
              <span>&nbsp;Twitter</span>
              </a>
          </div>
        </div>
      </div>
     </section>
    )
  },
})
