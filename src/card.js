import React from "react"

export default class Card extends React.Component {
	constructor(props) {
		super(props)
		this.real_pici = props.card.src
		this.hidden_pici = "/images/flippy.jpg"
		
		this.state = {
			flippy: false,
		}
	}
	flippyflippy() {
		this.setState({flippy: !this.state.flippy})
		console.log("Hejhej " + this.state.flippy)
		this.props.hoy(this.props.card, (unflippyCards) => {
			unflippyCards.forEach(card => {card.unflip()})
		})
	}
	unflip() {
		this.setState({flippy: false})
	}
	render() {
		return (
			<div>
				{
					<img onClick={this.flippyflippy.bind(this)} src={this.state.flippy ? this.real_pici : this.hidden_pici} alt="nowayjose" />
				}
			</div>
		)
	}
}