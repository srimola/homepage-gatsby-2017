import React from 'react'
import Resume from '../components/Resume.jsx'

export default class Index extends React.Component {
  render () {
    return (
      <section className='section'>
        <div className='container'>
          <Resume />
        </div>
      </section>
    )
  }
}
