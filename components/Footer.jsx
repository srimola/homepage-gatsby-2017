import React from 'react'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
    <footer className='footer'>
      <div className="container">
      <div className="content">
        <p>
          <small>Built by Stefan Rimola with <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a> and <a href="http://bulma.io/">Bulma</a>.</small>
          <br/>
          <small>&copy; Copyright Stefan Rimola 2017</small>
        </p>
      </div>
      </div>
    </footer>
    )
  },
})


