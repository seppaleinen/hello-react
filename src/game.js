import React from "react"
import Card from "./card"



const photos = [
	"/images/dog-1.jpg",
	"/images/dog-2.jpg",
	"/images/dog-3.jpg",
	"/images/dog-4.jpg",
	"/images/dog-5.jpg",
	"/images/dog-6.jpg",
	"/images/awesome.jpg"
]

export default class Game extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			cards: this.shuffle(photos),
			flippedCards: []
		}
	}
	shuffle(a) {
		a = a.concat(a)
    	for (let i = a.length; i; i--) {
        	let j = Math.floor(Math.random() * i);
        	[a[i - 1], a[j]] = [a[j], a[i - 1]];
    	}
    	return a.map(i => ({id: i + Math.random(), src: i}))
	}
	hoy = (card, unflippyflip) => {
		this.state.flippedCards.push(card)
		if(this.state.flippedCards.length === 2) {
			if(this.state.flippedCards[0].src === this.state.flippedCards[1].src) {
				alert("yay: " + this.state.flippedCards[0].src + ":" + card.src)
				let supercards = this.state.cards.filter((item) => item.src !== card.src)
				this.setState({cards: supercards})
			} else  {
				unflippyflip(this.state.flippedCards)
				//this.setState({flippedCards: []})
			}
		}
	}
	render() {
		return (
			<div>
				{
					this.state.cards.map(
						card => (
							<Card hoy={this.hoy} card={card} key={card.id}/>
							)
					)
				}
			</div>
		)
	}
}