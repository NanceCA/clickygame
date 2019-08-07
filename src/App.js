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
    clicked: false,
    database
  };

  //add code in here of onclick

  render() {
    return (
      <Wrapper>
        <Title />
        <Scores userScore={this.state.userScore} highScore={this.state.highScore}></Scores>
        {/* map over each item in the array to generate a card component */}
        {this.state.database.map(data =>
          (<Card name={data.name} image={data.image} />
          ))}
      </Wrapper>
    )
  }
}

export default App;
