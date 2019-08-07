import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scores from "./components/Scores";
import database from "./database.json";


let userScore = 0;
let highScore = 0;
let result = "Click on a picture to earn points. It's a memory game. Don't click on the same picture more than once!"

class App extends Component {

  //initializing state
  state = {
    highScore,
    userScore,
    result,
    database
  };


  //add code in here of onclick
  manageClick = id => {

    //making it easier to access the database
    const database = this.state.database;
    console.log("We got here");

    //create a new array for userClicked = true
    const alreadyClicked = database.filter(data => data.id === id);

    //if the user double selects
    if (alreadyClicked[0].userClicked) {
      result = "You already clicked this card"
      userScore = 0;
      alreadyClicked[0].userClicked = false;

      console.log("In conditional where user has double selected");

      this.setState = {
        database,
        userScore,
        result
      };

      //if the user does not double select
    }
    else if (userScore < database.length) {

      alreadyClicked[0].userClicked = true;

      //increment userScore
      userScore++;
      result = "You guessed correctly! Go again"
      console.log("In conditional where user has NOT double clicked");

      if (userScore > highScore) {
        highScore = userScore
        console.log("the new high score is", highScore);
      };

      //randomly sort the array
      database.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState = {
        database,
        userScore,
        highScore,
        result

      }
    }
    else {
      alreadyClicked[0].userClicked = true;

      //reset the state
      for (let i = 0; i < database.length; i++) {
        database[i].userClicked = false;
      };

      //randomly sort the array
      database.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState = {
        database,
        userScore: 0,
        highScore: 12,
        result: "Wow, you beat the game! Let's play again"
      };
    }
  };

  render() {
    return (
      <Wrapper>
        <Title />
        <h4 className="introMessage">
          {this.state.result}
        </h4>
        <h3>The high score is: {this.state.highScore}</h3>
        <h3>Your score is: {this.state.userScore}</h3>

        <Scores userScore={this.state.userScore} highScore={this.state.highScore}></Scores>

        {/* map over each item in the array to generate a card component */}
        {this.state.database.map(data =>
          (<Card key={data.id} id={data.id} name={data.name} image={data.image} manageClick={this.manageClick} />
          ))}
      </Wrapper>
    )
  }
}


export default App;
