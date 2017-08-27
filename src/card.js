import React from "react"
import classNames from "class-names"
import "./card.css"
import { inject } from "mobx-react"


export default class Card extends React.Component {
  handleClick = () => {
    if (this.props.canFlip) {
      this.props.card.flip()
      this.props.onFlip(this.props.id, this.props.src, this.handleUnflipRequest)
    }
  }

  handleUnflipRequest = () => {
    this.props.card.flip()
  }

  render() {
    return (
      <div
        className="card"
        onClick={this.handleClick}>
        <div
          className={classNames("image", { flipped: this.props.card.flipped })}
          style={{ backgroundImage: `url(${this.props.src})` }} />
      </div>
    )
  }

}