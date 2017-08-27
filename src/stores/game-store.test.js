import React from 'react';
import ReactDOM from 'react-dom';
import GameStore from './game-store'

describe('Hejhej', function() {
  it('duplicatedAndShuffledCards should return 10 results', function() {
  	const gameStore = new GameStore()
  	const result = gameStore.duplicatedAndShuffledCards()
  	expect(result.length).toEqual(10)
  });
})
