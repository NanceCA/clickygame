import React from "react";
import "./style.css";

function Scores(props) {
    return (
        <div className="container">
            <div className="scores">
                YourScore: {props.userScore}
                <hr />
                HighScore: {props.highScore}
                <hr />
            </div>
        </div>
    )
}

export default Scores;
