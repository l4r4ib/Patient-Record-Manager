import React from "react";
import { useState } from "react";
import Form from"./components/form.component";
import CardList from "./components/cardList.component";
const App = () => {
  const [cards, setCards ] = useState([]);
  const addCard = (card) => {
    const randomId = Math.floor(Math.random() * 900) + 100;
    const newCard = { ...card, id: randomId };
    setCards((prevCards) => [...prevCards, newCard]);
  };

 
  return (
    <div className="App">
      <div className="formContainer">
      <Form addCard={addCard} />
      </div>
      <div className="container">
      <CardList cards={cards}  />
      </div>
    </div>

  );
};

export default App;
