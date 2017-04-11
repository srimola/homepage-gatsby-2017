import React from 'react'
import Bio from '../components/Bio'
import Resume from '../components/Resume'
import AboutHeader from '../components/AboutHeader.jsx'
import ToolingHeader from '../components/ToolingHeader.jsx'
import Tooling from '../components/Tooling.jsx'
import ContactHeader from '../components/ContactHeader.jsx'
import ContactBody from '../components/ContactBody.jsx'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Bio />
        <AboutHeader />
        <Resume />
        <ContactHeader />
      </div>
      )
    }
  }
