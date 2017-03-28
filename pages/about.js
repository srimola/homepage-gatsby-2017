import React from 'react'
import Resume from '../components/Resume.jsx'
import AboutHeader from '../components/AboutHeader.jsx'

export default class Index extends React.Component {
  render () {
    return (
        <div>
            <AboutHeader />
            <Resume />
        </div>
    )
  }
}
