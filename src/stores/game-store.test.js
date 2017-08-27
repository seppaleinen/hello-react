import React from 'react';
import ReactDOM from 'react-dom';
import GameStore from './game-store'

describe('Hejhej', function() {
  var gameStore
  beforeEach(function() {
  	gameStore = new GameStore()
  })
  it('duplicatedAndShuffledCards should return 10 results', function() {
  	const result = gameStore.duplicatedAndShuffledCards()
  	expect(result.length).toEqual(10)
  });
})
