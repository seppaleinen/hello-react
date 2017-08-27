import React from "react"
import Card from "./card"
import shuffle from "./shuffle"

const photos = [
  "/images/dog-1.jpg",
  "/images/dog-2.jpg",
  "/images/dog-3.jpg",
  "/images/dog-4.jpg",
  "/images/dog-5.jpg"
]

export default class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: this.duplicatedAndShuffledCards(),
      flippedCards: []
    }
  }

  duplicatedAndShuffledCards = () => (
    shuffle([...photos, ...photos])
  )

  handleCardFlip = (photo, unflipCallback) => {
    const flippedCards = [...this.state.flippedCards, { photo, unflipCallback }]
    this.setState({ flippedCards }, this.handleFlippedCardChange)
  }

  handleFlippedCardChange = () => {
    if (this.state.flippedCards.length === 2) {
    	console.log(this.state.flippedCards[0].photo + ":" + this.state.flippedCards[1].photo)
      if(this.state.flippedCards[0].photo === this.state.flippedCards[1].photo) {
      	console.log("Yay")
      	let filteredCards = this.state.cards.filter(card => card.src !== this.state.flippedCards[0].photo)
      	this.setState({cards: filteredCards, flippedCards: []})
      } else {
        setTimeout(() => {
          this.state.flippedCards.forEach(card => {
            card.unflipCallback()
          })
          this.setState({ flippedCards: [] })
        }, 1000)
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.cards.map(card => (
          <Card
          	key={card.id}
            canFlip={this.state.flippedCards.length < 2}
            onFlip={this.handleCardFlip}
            photo={card.src} />
        ))}
      </div>
    )
  }

}