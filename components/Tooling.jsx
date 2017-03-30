import React from 'react'

export default class Tooling extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
        <section className='section'>
            <div className='container'>
            <div className="content">
                <h1 className='title'>Software:</h1>
                <p><strong>Terminal and Text Editor:</strong></p>
                <p>First and foremost, I spend most of my day inside iTerm2 and `vim`. Inside iTerm I use `oh-my-zsh` </p>
                <p><strong>Keybindings:</strong></p>
                <p></p>
                <p><strong>Other pieces of software I use in my daily workflow:</strong></p>
                <ul>
                  <li>Sublime Text occasionally, if I'm doing a lot of tedius copy-pasting</li>
                  <li>oh-my-zsh</li>
                  <li>Homebrew</li>
                </ul>
                <h1 className='title'>Hardware:</h1>
                <ul>
                  <li>HTML, HTML5</li>
                </ul>
            </div>
            </div>
        </section>
    )
  };
}

