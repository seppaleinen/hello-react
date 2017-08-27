import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import GameStore from './stores/game-store'
import { Provider } from "mobx-react"

const stores  = {
  gameStore: new GameStore()
}

const App = () => 
  <Provider {...stores}>
    <Card card={new Card("/images/dog-1.jpg")}/>
  </Provider>

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
