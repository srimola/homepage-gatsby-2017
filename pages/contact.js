import React from 'react'
import ContactHeader from '../components/ContactHeader.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default class Index extends React.Component {
  render () {
    return (
        <div>
            <ContactHeader />
            <ContactForm />
        </div>
     )
  }
}
