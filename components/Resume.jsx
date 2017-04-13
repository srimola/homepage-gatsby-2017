import React from 'react'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
        <section className='section'>
            <div className='container'>
            <div className="content">
                <h1 className='title'>Skills:</h1>
                <ul>
                  <li>HTML, HTML5</li>
                  <li>CSS, CSS3, SASS</li>
                  <li>JavaScript, ES6, React, jQuery, Handlebars, Gulp, Webpack</li>
                  <li>Twig, PHP, Laravel, MySQL</li>
                  <li>Git, Github, Stash, Bitbucket</li>
                  <li>Photoshop, Illustrator, Sketch</li>
                </ul>
                <h1 className='title'>Experience:</h1>
                <ul>
                <li>
                  <strong className='subtitle'>Engadget<span className='is-pulled-right'>July 2015 - Present</span></strong>
                  <p>
                    At Engadget I support Engadget's front-end stack, product database, and user database. I work closely with several other teams to maintain our commenting system, video platform, advertising implementation, SSL migration, and more. I wrote and am responsible for maintaing an internal homepage content curation tool as well as a middleware API that parses HTML content from Aol's CMS into structured JSON data for our iOS and Android apps to consume.
                  </p>
                  <ul>
                    <li>Tailor - ES6 JavaScript, Handlebars, jQuery, Webpack</li>
                    <ul><li>Internal homepage content curation tool</li></ul>
                    <li>Engadget Mobile Apps API - PHP, Laravel</li>
                    <ul>
                      <li>
                        Wrote and maintained a middleware API that parses HTML content from Aol's CMS into JSON feeds for our Android and iOS mobile apps to consume
                      </li>
                    </ul>
                  </ul>
                </li>
                <li>
                  <strong className='subtitle'>Aol<span className="is-pulled-right">June 2013 - June 2015</span></strong>
                  <p>
                    During my last two years of college, I worked remotely as an intern on Aol's central content management system serving customers like The Huffington Post, Engadget, and Moviefone. I worked on redesigning and enhancing the CMS front-end using SASS, CSS, JavaScript and HTML. I also spent time refining and debugging pre-existing JavaScript, HTML, CSS and PHP.
                  </p>
                </li>
                </ul>
                <h3 className='subtitle'>Freelance work and side projects:</h3>
                <ul>
                    <li>
                      <a href='http://www.maxforlive.com/library/device/2378/architect' target='_blank'>Architect</a> - A Max for Live device for Ableton Live which allows the user to apply complex automation curves to any midi-controllable parameter within the program.
                    </li>
                    <li><a href='http://beyondcasualb.com' target='_blank'>BeyondCasual</a> - WordPress Site</li>
                </ul>
            </div>
            </div>
        </section>
    )
  },
})
