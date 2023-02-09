import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import CollectionContainer from './Components/CollectionContainer/CollectionContainer';



function App() {
  const [collections, setCollections] = useState([]);

    useEffect(() => {
      getAllCollections();
    }, []);
  
  async function getAllCollections() {
    const response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(response.data);
    console.log(response.data);
  }







  return (
    <div>
      <Header/>
      <CollectionContainer collections={collections}/>
    </div>
  );
}

export default App;
