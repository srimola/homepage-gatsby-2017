import React from 'react'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <section className='hero' id='contact'>
            <div className="hero-body container">
                <div className="container">
                        <p>(408) 439-6539</p>
                </div>
            </div>
      </section>
    )
  },
})


