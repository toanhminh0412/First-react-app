import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    accounts: [
      {username: 'toanhminh0412', years: 7},
      {username: 'dylan1423', years: 4},
      {username: 'natasha3429', years: 3},
      {username: 'matthew3425', years: 6}
  ]}

  switchUsername = (event) => {
    this.setState ({
      accounts: [
        {username: event.target.value, years: this.state.accounts[0].years},
        {username: this.state.accounts[1].username, years: this.state.accounts[1].years},
        {username: this.state.accounts[2].username, years: this.state.accounts[2].years},
        {username: this.state.accounts[3].username, years: this.state.accounts[3].years}
      ]
    })
    
  }

  switchUsername1 = (event) => {
    this.setState ({
      accounts: [
        {username: this.state.accounts[0].username, years: this.state.accounts[0].years},
        {username: event.target.value, years: this.state.accounts[1].years},
        {username: this.state.accounts[2].username, years: this.state.accounts[2].years},
        {username: this.state.accounts[3].username, years: this.state.accounts[3].years}
      ]
    })
    
  }

  switchUsername2 = (event) => {
    this.setState ({
      accounts: [
        {username: this.state.accounts[0].username, years: this.state.accounts[0].years},
        {username: this.state.accounts[1].username, years: this.state.accounts[1].years},
        {username: event.target.value, years: this.state.accounts[2].years},
        {username: this.state.accounts[3].username, years: this.state.accounts[3].years}
      ]
    })
    
  }

  switchUsername3 = (event) => {
    this.setState ({
      accounts: [
        {username: this.state.accounts[0].username, years: this.state.accounts[0].years},
        {username: this.state.accounts[1].username, years: this.state.accounts[1].years},
        {username: this.state.accounts[2].username, years: this.state.accounts[2].years},
        {username: event.target.value, years: this.state.accounts[3].years}
      ]
    })
    
  }


  render() {

    const h1Style = {
      textDecoration: 'underline'
    }

    const pStyle = {
      fontSize: '150%',
    }

    return (
      <div className="App">
        <h1 style={h1Style}>Assignment 1 - React</h1>
        <p style={pStyle}>Membership with React</p>
        <UserOutput username={this.state.accounts[0].username} years={this.state.accounts[0].years} changed={this.switchUsername}></UserOutput>
        <UserOutput username={this.state.accounts[1].username} years={this.state.accounts[1].years} changed={this.switchUsername1}></UserOutput>
        <UserOutput username={this.state.accounts[2].username} years={this.state.accounts[2].years} changed={this.switchUsername2}></UserOutput>
        <UserOutput username={this.state.accounts[3].username} years={this.state.accounts[3].years} changed={this.switchUsername3}></UserOutput>
      </div>
    );
  }
}

export default App;
