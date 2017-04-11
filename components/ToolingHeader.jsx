import React from 'react'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <section className='hero is-info is-bold is-medium'>
            <div className="hero-body">
                <div className="container">
                        <i className="fa fa-wrench fa-5x" aria-hidden="true"></i><br/><br/>
                        <h1 className='title'>About my tools</h1>
                        <p className='subtitle'>
                          I take great pride in customizing each of the tools I use to my needs. This section serves as a living document of the various bits of software and settings I use, and some of my reasoning for doing so.
                        </p>
                </div>
            </div>
        </section>
    )
  },
})


