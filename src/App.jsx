import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import CollectionContainer from './Components/CollectionContainer/CollectionContainer';



function App() {
  const [questions, setQuestions] = useState([]);

    useEffect(() => {
      getAllCollections();
    }, []);
  
  async function getAllCollections() {
    const response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setQuestions(response.data);
    console.log(response.data);
  }







  return (
    <div>
      <Header/>
      <CollectionContainer questions={questions}/>
    </div>
  );
}

export default App;
