import React from "react"
import classNames from "class-names"
import "./card.css"
import { inject } from "mobx-react"


@inject("cardsStore")
export default class Card extends React.Component {
  state = {
    flipped: false
  }

  handleClick = () => {
    if (this.props.canFlip) {
      this.setState({ flipped: true })
      this.props.onFlip(this.props.id, this.props.src, this.handleUnflipRequest)
    }
  }

  handleUnflipRequest = () => {
    this.setState({ flipped: false })
  }

  render() {
    return (
      <div
        className="card"
        onClick={this.handleClick}>
        <div
          className={classNames("image", { flipped: this.state.flipped })}
          style={{ backgroundImage: `url(${this.props.src})` }} />
      </div>
    )
  }

}