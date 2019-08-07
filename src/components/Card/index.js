import React from "react";
import "./style.css";

const Card = props => {
    return (
        <div className="card" onClick={() => props.manageClick(props.id)}>
            <div className="cardContainer">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default Card;