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
        <div className="container">
            <div class="columns">
            <div className="column is-half">
                    <div className="field">
                        <label className='label'>Name</label>
                        <p className='control'>
                                <input required className='input is-primary' type='text' placeholder='Johann Sebastian Bach' />
                        </p>
                    </div>
                    <div className="field">
                        <label className='label'>Email</label>
                        <p className='control'>
                                <input required className='input is-primary' type='text' placeholder='johann@gmail.com' />
                        </p>
                    </div>
                    <div className="field">
                        <label className='label'>Subject</label>
                        <p className='control'>
                                <input required className='input is-primary' type='text' placeholder='Ello there chap' />
                        </p>
                    </div>
            <div className="field">
              <label className="label">Message</label>
              <p className="control">
                <textarea className="textarea" placeholder="Message"></textarea>
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-primary">Submit</button>
              </p>
            </div>
            </div>
            <div className="column is-half is-hidden-mobile"></div>
            </div>
        </div>
      </section>
    )
  },
})


