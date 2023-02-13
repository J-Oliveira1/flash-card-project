import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import CollectionContainer from './Components/CollectionContainer/CollectionContainer';
import CardContainer from './Components/CardContainer/CardContainer';




function App() {
  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);

    useEffect(() => {
      getAllCollections();
      getAllCards(1);
    }, []);


  
  async function getAllCollections() {
    const response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(response.data);
    console.log(response.data);
  }

  async function getAllCards(collectionId) {
    const response = await axios.get(`http://127.0.0.1:8000/api/collections/${collectionId}/cards/`, );
    setCards(response.data);
    console.log(response.data);
  }

  async function addingNewFlashcard(collectionId) {
    const response = await axios.post(`http://127.0.0.1:8000/api/collections/${collectionId}/cards/`);
    if(response.status === 201){
      await getAllCards();
    }
  }






  return (
    <div>
      <Header/>
      <CollectionContainer collections={collections} getAllCards={getAllCards}/>
      <CardContainer cards={cards} addingNewFlashcard={addingNewFlashcard}/>
    </div>
  );
}

export default App;
