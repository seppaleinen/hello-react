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
      flippedCards: [],
      flipCount: 0
    }
  }

  duplicatedAndShuffledCards = () => (
    shuffle([...photos, ...photos])
  )

  handleCardFlip = (id, src, unflipCallback) => {
    const flippedCards = [...this.state.flippedCards, { id, src, unflipCallback }]
    this.setState({ flippedCards, flipCount: this.state.flipCount + 1 }, this.handleFlippedCardChange)
  }

  handleFlippedCardChange = () => {
    if (this.state.flippedCards.length === 2) {
      const firstCard = this.state.flippedCards[0]
      const secondCard = this.state.flippedCards[1]
      if(firstCard.id === secondCard.id) {
      	console.log("Elseif")
      	          this.state.flippedCards.forEach(card => {
            card.unflipCallback()
          })
      	this.setState({flippedCards: []})
      } else if(firstCard.src === secondCard.src) {
      	setTimeout(() => {
      	  let filteredCards = this.state.cards.filter(card => card.src !== firstCard.src)
      	  this.setState({cards: filteredCards, flippedCards: []})
      	}, 1000)
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

  restart = () => {
  	this.setState({cards: this.duplicatedAndShuffledCards(), flippedCards: [], flipCount: 0})
  }

  gameOn = () => {
  	return (
  		<div>
          {this.state.cards.map(card => (
            <Card
              id={card.id}
          	  key={card.id}
              canFlip={this.state.flippedCards.length < 2}
              onFlip={this.handleCardFlip}
              src={card.src} />
          ))}
        </div>
        )
  }

  gameWon = () => {
  	return (
  			<div>
  				Go home youre drunk
  				{
  					this.state.flipCount
  				}
  			</div>
  		)
  }

  render() {
    return (
      <div>
      	<h1>Card game yo</h1>
      	{this.gameOn()}
      	{this.state.cards.length === 0 && this.gameWon()}
        <div>
          <button onClick={this.restart}>Restart game</button>
        </div>
      </div>
    )
  }

}