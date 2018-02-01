import React, { Component } from 'react';
import '../css/messages.css';

class Messages extends Component {
  render() {

    let res = [];
    if (this.props.data[0]) {
      this.props.data[0].messages.map((m, idx) => {
        if(m) {
          res.push(
            m.userName === this.props.userName ?
              <div className="myMessage" key={idx}>
              <div className="messageUserName">User: {m.userName}</div>
                <div className="messageTime">{m.time.replace('T', '  ').slice(0,19)}</div>
                <div className="messageTextHolder">{m.text}</div>
              </div>
              :
              <div className="otherMessage" key={idx}>
                <div className="messageUserName">User: {m.userName}</div> <div className="messageTime">Time: {m.time.replace('T', '  ').slice(0,19)}</div>
                  <div className="messageTextHolder">{m.text}</div>
              </div>
            )
          }
      });
    }

    return (
      <div id="messagesHolder">
          {res}
      </div>
    );
  }
}

export default Messages;
