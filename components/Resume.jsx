import React from 'react'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
    <div className=''>
      <h1 className='title'>Skills:</h1>
      <ul>
        <li>JavaScript, React, jQuery</li>
        <li>HTML, HTML5</li>
        <li>CSS, SASS</li>
        <li>PHP, Laravel</li>
      </ul>
      <h1 className='title'>Experience:</h1>
      <ul>
        <li>
          <strong className='subtitle'>Engadget<span className="is-pulled-right">July 2015-Present</span></strong>
          <ul>
            <li>Tailor - JavaScript, Handlebars, jQuery</li>
            <ul><li>Internal homepage content curation tool</li></ul>
            <li>Mobile API - PHP, Laravel</li>
            <ul>
              <li>Wrote and maintained a middleware API that parses HTML content from CMS into JSON feeds for mobile apps to consume
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <strong className='subtitle'>Aol<span className="is-pulled-right">June 2013-June 2015</span></strong>
        </li>
      </ul>
    </div>
    )
  },
})