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
     <section className="hero is-dark is-bold is-fullheight">
      <div className="hero-body">
        <div className='container has-text-centered'>
          <figure className="image is-128x128" style={{display: 'inline-block'}}>
            <img src='stefan.jpg' />
          </figure>
          <p>
            <span className='title'>Stefan Rimola</span><br/>
            <span className='subtitle'>San Francisco, CA<br/>
            Software Engineer</span>
          </p>
          <div className="hero-buttons">
              <Link to={prefixLink('/about/')} className='button is-dark is-inverted' onClick={this.toggleNav}>
              <span className="icon">
                <i className="fa fa-address-card-o" aria-hidden="true"></i>
              </span>
              <span>About</span>
              </Link>
              <Link to={prefixLink('/contact/')} className='button is-dark is-inverted' onClick={this.toggleNav}>
              <span className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
              <span>Contact</span>
              </Link>
              <a href='https://github.com/srimola' className='button is-dark is-inverted'>
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
              <span>Github</span>
              </a>
          </div>
        </div>
      </div>
     </section>
    )
  },
})
