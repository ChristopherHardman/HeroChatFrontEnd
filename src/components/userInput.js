import React, { Component } from 'react';
import '../css/userInput.css';
import Button from './button';

class UserInput extends Component {
  render() {
    return (
      <div id="userInputHolder">
        <h1>Welcome to HeroChat</h1>

        <h2>Please create a username:</h2>
        <input id="userInputInput" type="text" onChange={this.props.temp}/>

        <Button
          onClick={this.props.onClick}
          label={'submit'}
          width={'30%'}
        />

      </div>
    );
  }
}

export default UserInput;
