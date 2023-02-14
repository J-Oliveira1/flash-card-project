import React, { useState } from "react";
import axios from "axios";

const AddNewFlashcard = ({ activeId, getAllCards }) => {
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
    <form className=""onSubmit={handlesubmit}>
      <h4>Add Card</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          border: "5px solid #907078",
          padding: "12px 84px",
          margin: "0px 0",
        }}
      >
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
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default AddNewFlashcard;
