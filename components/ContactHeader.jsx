import React from 'react'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <section className='hero is-warning is-bold is-medium' id='contact'>
            <div className="hero-body container">
                <div className="container">
                        <i className="fa fa-phone fa-5x" aria-hidden="true"></i><br/><br/>
                        <h1 className='title'>Need to get in touch?</h1>
                        <p className='subtitle'>Hit me up!</p>
                        <br/>
                        <p className='title'>(408) 439-6539</p>
                        <p className='title'>stefanrimola@gmail.com</p>
                </div>
            </div>
      </section>
    )
  },
})

