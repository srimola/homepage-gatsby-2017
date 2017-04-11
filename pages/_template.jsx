import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import GoogleAnalytics from '../components/GoogleAnalytics'
import Helmet from 'react-helmet'
import { config } from 'config'
import '../sass/main'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Helmet
        title={config.siteTitle}
        meta={[
        {"name": "description", "content": "Stefan Rimola 2017"},
        {"name": "keywords", "content": "stefan rimola, rimola, stefanrimola"},
        ]}
        link={[
        {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},
        {"rel": "icon", "type": "image/x-icon", "href": "http://lok1.vip/assets/favicon.ico"},
        ]}
        />
        <Nav />
        {this.props.children}
        <Footer />
        <GoogleAnalytics />
      </div>
    )
  },
})
