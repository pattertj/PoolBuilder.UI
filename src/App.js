import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '2 Benalish Honor Guard\r\n1 Serra Disciple'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      if(this.state.value !== '')
      {
          alert('A pool was submitted!');
          
          // Get the list of cards
          var cardArray = this.state.value.split(/\r?\n/);

          //Iterate on the cards
          cardArray.forEach(function (card) {
      alert(card);
    });
              
          event.preventDefault();
      }   
      else 
      {
          alert('Please submit a pool!');
      }
  }

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Pool Builder</h1>
          </header>
          <div className="App-intro">
          <br/>
              <form onSubmit={this.handleSubmit}>
                  <label>
                      <p>Submit your pool:</p>
                      <textarea className="Pool-textarea" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <br/>
                      <input type="submit" value="Submit" />
              </form>
          </div>
      </div>
    );
  }
}

export default App;