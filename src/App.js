import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import Candy from './Candy'
import Home from './Home'
import Potato from './Potato'
import Soda from './Soda'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/potato">
          <Potato />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
