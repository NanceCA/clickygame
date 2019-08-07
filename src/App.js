import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scores from "./components/Scores";
import database from "./database.json";

class App extends Component {

  //setting the state to the database array
  state = {
    highScore: 0,
    userScore: 0,
    clicked: 0,
    result: "Your guess was",
    database
  };


  //add code in here of onclick
  handleClick() {
    if (this.state.clicked > 2) {
      this.setState = {
        userScore: 0,
        clicked: 0,
        result: "Whoops you clicked the same one twice!"
      }
    }
    else {
      this.setState = {
        userScore = this.state.UserScore + 1,
        clicked = this.state.clicked + 1,
        result: "Yay you guess correctly!"

      }
    }
  }
  setState = {

  }
}

render() {
  return (
    <Wrapper>
      <Title />
      <Scores userScore={this.state.userScore} highScore={this.state.highScore}></Scores>
      {/* map over each item in the array to generate a card component */}
      {this.state.database.map(data =>
        (<Card name={data.name} image={data.image} onChange={this.handleClick} />
        ))}
    </Wrapper>
  )
}
}

export default App;
