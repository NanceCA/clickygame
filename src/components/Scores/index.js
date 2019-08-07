import React from "react";
import "./style.css";

function Scores(props) {
    return <div className="scores">
        <p>YourScore: {props.userScore}</p>
        <hr />
        <p>HighScore: {props.highScore}</p>
        <hr>{props.result}</hr>
    </div>;
}

export default Scores;
