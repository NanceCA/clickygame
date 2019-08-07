import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="cardContainer">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default Card;