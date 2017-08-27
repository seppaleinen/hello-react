import React from "react"
import Card from "./card"
import { inject } from "mobx-react"


@inject("gameStore")
export default class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: this.props.gameStore.cards,
      flippedCards: [],
      flipCount: 0
    }
  }

  handleCardFlip = (id, src, unflipCallback) => {
    const flippedCards = [...this.state.flippedCards, { id, src, unflipCallback }]
    this.setState({ flippedCards, flipCount: this.state.flipCount + 1 }, this.handleFlippedCardChange)
  }

  handleFlippedCardChange = () => {
    if (this.state.flippedCards.length === 2) {
      const firstCard = this.state.flippedCards[0]
      const secondCard = this.state.flippedCards[1]
      if(firstCard.id === secondCard.id) {
      	this.state.flippedCards.forEach(card => {
          card.unflipCallback()
        })
      	this.setState({flippedCards: []})
      } else {
      	setTimeout(() => {
      	  if(firstCard.src === secondCard.src) {
      	    let filteredCards = this.state.cards.filter(card => card.src !== firstCard.src)
      	    this.setState({cards: filteredCards, flippedCards: []})
          } else {
            this.state.flippedCards.forEach(card => {
              card.unflipCallback()
            })
            this.setState({ flippedCards: [] })
          }
      	}, 1000)
      } 
    }
  }

  restart = () => {
  	this.setState({cards: this.props.gameStore.duplicatedAndShuffledCards(), flippedCards: [], flipCount: 0})
  }

  gameOn = () => {
  	return (
  		<div>
          {this.state.cards.map(card => (
            <Card
              id={card.id}
          	  key={card.id}
              card={card}
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
  				Go home youre drunk! This many moves: 
  				{
  					this.state.flipCount
  				}
  			</div>
  		)
  }

  render() {
    const { cards } = this.props.gameStore
    return (
      <div>
      	<h1>Card Game Yo</h1>
      	{this.gameOn()}
      	{cards.length === 0 && this.gameWon()}
        <div>
          <button onClick={this.restart}>Restart game</button>
        </div>
      </div>
    )
  }

}