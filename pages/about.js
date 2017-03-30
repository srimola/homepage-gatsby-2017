import React from 'react'
import Resume from '../components/Resume.jsx'
import AboutHeader from '../components/AboutHeader.jsx'
import ToolingHeader from '../components/ToolingHeader.jsx'
import Tooling from '../components/Tooling.jsx'

export default class Index extends React.Component {
  render () {
    return (
        <div>
            <AboutHeader />
            <Resume />
            <ToolingHeader />
            <Tooling />
        </div>
    )
  }
}
