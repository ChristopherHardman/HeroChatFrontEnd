import React, { Component } from 'react';
import '../css/conversations.css';

class Conversations extends Component {
  render() {
    let res = []
      if(this.props.list) {
        this.props.list.map(chat=> {

      res.push (
          <div
            key={chat._id}
            className="chatTitle"
            onClick={this.props.focus}
            id={chat._id}
            style={{
              backgroundColor: this.props.selected === chat._id ? "#283e4a" : "white",
              color: this.props.selected === chat._id ? "white" : "#283e4a",
            }}
          >
            {chat.title}
          </div>
      )
      })
    };

    return (
      <div id="ConversationsHolder">
          {res}
      </div>
    );
  }
}

export default Conversations;
