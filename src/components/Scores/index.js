import React from "react";
import "./style.css";

function Scores(props) {
    return <div className="scores">
        <p>YourScore: {props.userScore}</p>
        <hr />
        <p>HighScore: {props.HighScore}</p>
    </div>;
}

export default Scores;
