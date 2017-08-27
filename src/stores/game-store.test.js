import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../card'
import GameStore from './game-store'

describe('GameStore tests', function() {
  var gameStore
  beforeEach(function() {
  	gameStore = new GameStore()
  })
  it('duplicatedAndShuffledCards should return 10 results', () => {
  	const result = gameStore.duplicatedAndShuffledCards()
  	expect(result.length).toEqual(10)
  })
  it('Constructor should set correct values', () => {
    expect(gameStore.cards.length).toEqual(10)
    expect(gameStore.flippedCards.length).toEqual(0)
    expect(gameStore.flipCount).toEqual(0)
  })
  it('Attributes needs to be editable', () => {
  	gameStore.cards.pop()
  	gameStore.flippedCards.push(new Card(""))
  	gameStore.flipCount = 1
    expect(gameStore.cards.length).toEqual(9)
    expect(gameStore.flippedCards.length).toEqual(1)
    expect(gameStore.flipCount).toEqual(1)
  })
  it('Attributes should be reset after gameStore.reset', () => {
  	gameStore.cards.pop()
  	gameStore.flippedCards.push(new Card(""))
  	gameStore.flipCount = 1
  	gameStore.restart()
    expect(gameStore.cards.length).toEqual(10)
    expect(gameStore.flippedCards.length).toEqual(0)
    expect(gameStore.flipCount).toEqual(0)
  })
})
