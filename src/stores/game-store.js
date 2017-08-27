import { observable, action } from "mobx"
import shuffle from "./shuffle"


const photos = [
  "/images/dog-1.jpg",
  "/images/dog-2.jpg",
  "/images/dog-3.jpg",
  "/images/dog-4.jpg",
  "/images/dog-5.jpg"
]

export default class GameStore {
	@observable cards = []

	constructor() {
		this.cards = this.duplicatedAndShuffledCards()
	}

	duplicatedAndShuffledCards = () => (
      shuffle([...photos, ...photos])
    )
}