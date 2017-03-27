import React from 'react'

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
        </div>
      </div>
     </section>
    )
  },
})
