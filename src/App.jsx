import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import CollectionContainer from './Components/CollectionContainer/CollectionContainer';
import CardContainer from './Components/CardContainer/CardContainer';
import { async } from 'q';



function App() {
  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);

    useEffect(() => {
      getAllCollections();
    }, []);

    useEffect(() => {
      getAllCards();
    }, []);
  
  async function getAllCollections() {
    const response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(response.data);
    console.log(response.data);
  }

  async function getAllCards() {
    const response = await axios.get('http://127.0.0.1:8000/api/collections/1/cards/');
    setCards(response.data);
    console.log(response.data);
  }






  return (
    <div>
      <Header/>
      <CollectionContainer collections={collections}/>
      <CardContainer cards={cards}/>
    </div>
  );
}

export default App;
