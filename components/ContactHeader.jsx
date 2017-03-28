import React from 'react'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <section className='hero is-warning is-bold is-medium'>
            <div className="hero-body">
                <div className="container">
                        <i className="fa fa-phone fa-5x" aria-hidden="true"></i><br/><br/>
                        <h1 className='title'>Need to get in touch?</h1>
                        <p className='subtitle'>
                                Contact me through the form below and I'll get back to you as soon as humanly possible.
                        </p>
                </div>
            </div>
      </section>
    )
  },
})

