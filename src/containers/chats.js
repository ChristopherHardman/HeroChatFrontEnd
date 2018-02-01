import React, { Component } from 'react';
import '../css/chats.css';
import api from '../api';
import Button from '../components/button';
import Conversations from '../components/conversations';
import Messages from '../components/messages';
import UserInput from '../components/userInput';

class Chats extends Component {

  constructor(props){
    super(props);
    this.state = {
      newChat: '',
      newMessage: '',
      chats: [],
      userName: ''
    }
    tempName: ''
    this.getChats();
  }

  getChats = async () => {
    const conv = await api.conversations();
    this.setState({chats: conv.chats})
  }

  submitMessage = async (e) => {
    e.preventDefault();
    let message = {
      time: new Date(),
      text: this.state.newMessage,
      userName: this.state.userName,
      id: this.state.selectedChat
    }
    await api.addMessage(message);
    this.setState({newMessage:''})
    this.getChats();
  }

  addConversation = async (e) => {
    e.preventDefault();
    await api.addConversation(this.state.newChat);
    this.getChats();
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value})
  }

  selectChat = (e) => {
    e.preventDefault();
    this.setState({selectedChat: e.target.id})
  }

  addTemp = (e) => {
    e.preventDefault();
    this.tempName = e.target.value;
  }

  addUserName = (e) => {
    e.preventDefault();
    this.setState({userName: this.tempName})
  }

  render() {

    if(!this.state.userName) {
      return (
        <UserInput
          onClick={this.addUserName}
          temp={this.addTemp}
        />
      )
    }


    return (
      <div id="chatsHolder">
          <div id="chatsConsoleUpper">
            <div id="chatsChatList">
              <div className="header">Available Conversations</div>
              <div id="chatsAddNewChat">
                <input id="newChat" onChange={this.inputHandler} placeholder="Add chat title..."/>
                <Button
                onClick={this.addConversation}
                label={"Add New Chat"}
                />
              </div>
              <Conversations
                list={this.state.chats}
                focus={this.selectChat}
                selected={this.state.selectedChat}
              />
            </div>
            <div id="chatsChat">
              <div className="header">Messages</div>
              <Messages
                data={this.state.chats.filter( c => c._id === this.state.selectedChat)}
                userName={this.state.userName}
              />
            </div>
          </div>
          <div id="chatsConsoleLower">
            <div id="chatsInputHolder">
              <input id="newMessage" onChange={this.inputHandler} placeholder="Type message here..." value={this.state.newMessage}/>
            </div>
            <div id="chatsSubmit">
              <Button
                onClick={this.submitMessage}
                label={"Submit"}
                width={"75%"}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default Chats;
