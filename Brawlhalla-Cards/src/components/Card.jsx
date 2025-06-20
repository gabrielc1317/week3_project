import React from 'react';

const Card = (props) => {
  return (
    <div className={`card ${props.flipped ? "flipped" : ""}`} onClick={props.onFlip}>
      <div className="card-sides">
        <div className="card-front" style={{ backgroundColor: props.color }}>
          <img src={props.image} alt="Weapon logo" />
          <p>???</p>
        </div>
        <div className="card-back" style={{ backgroundColor: props.color }}>
          <h2>{props.weapon}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;