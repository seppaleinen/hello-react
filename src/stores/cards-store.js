import { observable, action } from "mobx"

export default class CardsStore {
	@observable header = "Card Game Yo"
	@action setHeader(newHeader) {
		this.header = newHeader
	}
}