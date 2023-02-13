import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import CollectionContainer from "./Components/CollectionContainer/CollectionContainer";
import CardContainer from "./Components/CardContainer/CardContainer";

function App() {
  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    getAllCollections();
  }, []);

  useEffect(() => {
    getAllCards();
  }, [activeId]);

  async function getAllCollections() {
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
    console.log(response.data);
  }

  async function getAllCards() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${activeId}/cards/`
    );
    setCards(response.data);
    console.log(response.data);
  }

  return (
    <div>
      <Header />
      <CollectionContainer
        collections={collections}
        getAllCards={getAllCards}
        setActiveId={setActiveId}
      />
      <CardContainer cards={cards} activeId={activeId} getAllCards={getAllCards}/>
    </div>
  );
}

export default App;
