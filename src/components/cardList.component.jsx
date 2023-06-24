
import React from "react";
import Card from "./card.component";

const CardList = ({ cards }) => {
  

  return (
    <div className="cardContainer">
      {cards.map((card, id) => (
        <div key={id}>
          <Card cardData={card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
