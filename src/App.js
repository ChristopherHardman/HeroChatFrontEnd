import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import Chats from './containers/chats';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
        <Header />
          <Switch>
            <Route exact path="/" component={Chats}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
