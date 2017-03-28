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
                        <i className="fa fa-address-card-o fa-5x" aria-hidden="true"></i><br/><br/>
                        <h1 className='title'>About me</h1>
                        <p className='subtitle'>
                            Hi! I'm Stefan. I currently work as a software engineer at <a href="https://www.engadget.com/" target="_blank"><strong>Engadget</strong></a> managing various aspects of our website and get to utilize JavaScript, HTML, and CSS on a daily basis. I enjoy tinkering with new UI libraries and frameworks, as well as building audio plugins using Max for Live. In my free time I love to travel, snowboard and go hiking.
                        </p>
                </div>
            </div>
        </section>
    )
  },
})

