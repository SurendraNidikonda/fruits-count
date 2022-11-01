// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangosCount: 0, bananasCount: 0}

  onClickEatMango = () => {
    this.setState(prevState => ({mangosCount: prevState.mangosCount + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangosCount, bananasCount} = this.state

    return (
      <div className="container">
        <div className="fruit-container">
          <h1 className="heading-text">
            Bob ate <span className="text-color">{mangosCount}</span> mangoes{' '}
            <span className="text-color">{bananasCount}</span> bananas
          </h1>
          <div className="fruit-count-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button
                onClick={this.onClickEatMango}
                className="button-container"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button
                onClick={this.onClickEatBanana}
                className="button-container"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
