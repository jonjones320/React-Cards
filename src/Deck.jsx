import React, { useEffect, useState } from "react";
import Card from "/Card.jsx"
import Axios from "axios"
import axios from "axios";

const BASE_URL = "https://deckofcardsapi.com/api/deck"

function Deck() {
  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  useEffect(getDeck => {
    async function getData() {
      const newDeck = await axios.get(`${BASE_URL}/new/shuffle/`)
      setDeck(newDeck.data)
    };
    getData();
  }, []);

  async function draw() {
    const res = await axios.get(`${BASE_URL}/${deck.deck_id}/draw/`);
    const card = res.data.cards[0];

    setDrawnCards(cards => [
      ...cards, {
        id: card.code, 
        name: `${card.suit} ${card.value}`, 
        image: card.image
    }]);
  };

  async function shuffle() {
    await axios.get(`${API_BASE_URL}/${deck.deck_id}/shuffle/`);
  }

  return (
    <>
    <button
      className="Draw-button"
      onClick={draw}>
        Draw
    </button>
    <button
      className="Shuffle-button"
      onClick={shuffle}>
        Shuffle
    </button>
    <div className="Deck-main">{
      drawnCards.map(card => (
        <Card 
          key={card.id} 
          name={card.name} 
          image={card.image} 
        />
      ))}
    </div>
    </>
  )
  
}

export default Deck