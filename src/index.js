import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from "./game"
import { Provider } from "mobx-react"
import CardsStore from "./stores/cards-store"

const stores  = {
  cardsStore: new CardsStore()
}

const App = () => 
  <Provider {...stores}>
    <Game />
  </Provider>

ReactDOM.render(<App/>, document.getElementById('root'))
