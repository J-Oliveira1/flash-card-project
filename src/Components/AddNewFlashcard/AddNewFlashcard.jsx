import React, { useState } from "react";
import axios from "axios";

const AddNewFlashcard = ({activeId, getAllCards}) => {
  const [definition, setDefinition] = useState("");
  const [word, setWord] = useState("");

  async function addingNewFlashcard(newCard) {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/collections/${activeId}/cards/`,
      newCard
    );
    if (response.status === 201) {
        await getAllCards();
    }
  }

  function handlesubmit(event) {
    event.preventDefault();
    alert(`New Card Added!`);
    let newCard = {
      definition: definition,
      word: word,
    };
    addingNewFlashcard(newCard);
    setDefinition("");
    setWord("");
  }
  return (
    <form onSubmit={handlesubmit}>
      <label>Enter title....</label>
      <input
        type="text"
        value={word}
        onChange={(event) => setWord(event.target.value)}
      />
      <label>Enter definition....</label>
      <input
        type="text"
        value={definition}
        onChange={(event) => setDefinition(event.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddNewFlashcard;
