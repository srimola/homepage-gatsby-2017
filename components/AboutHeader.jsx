import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <section className='hero is-info is-bold is-medium' id='about'>
            <div className="hero-body container">
                <div className="container">
                        <i className="fa fa-address-card-o fa-5x" aria-hidden="true"></i><br/><br/>
                        <h1 className='title'>About me</h1>
                        <p className='subtitle'>
                            Hi there! I'm <Link to='/'><strong>Stefan</strong></Link>. I currently work at <a href="https://www.engadget.com/" target="_blank"><strong>Engadget</strong></a> as a software engineer managing various aspects of our website and utilizing JavaScript, HTML, and SASSy CSS on a daily basis. I get a kick out of tinkering with UI libraries, learning new languages, libraries, and frameworks, as well as building audio plugins for Ableton using Max for Live. In my spare time I love to travel, snowboard and go hiking!✌️
                        </p>
                </div>
            </div>
        </section>
    )
  },
})

