import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {istrue: true}

  thankyou = () => {
    this.setState({istrue: false})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {istrue} = this.state
    return (
      <div className="bg-container">
        {istrue === true ? (
          <div className="emoji-card">
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul>
                {emojis.map(eachEmoji => {
                  const {id, name, imageUrl} = eachEmoji
                  return (
                    <li key={id}>
                      <img onClick={this.thankyou} src={imageUrl} alt={name} />
                      <h1>{name}</h1>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        ) : (
          <div className="love-card">
            <div className="thankyou-cont">
              <div>
                <img src={loveEmojiUrl} alt="love emoji" className="love" />
                <h1>Thank You</h1>
              </div>
              <p>
                We will use your feedback to improve our custome support
                performance
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
