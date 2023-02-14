import { useState } from "react";
import Card from "../Card/Card";
import AddNewFlashcard from "../AddNewFlashcard/AddNewFlashcard";
import axios from "axios";

const CardContainer = ({ cards, activeId, getAllCards, id }) => {
  const [index, setIndex] = useState(0);
  const [newCardList, setNewCardList] = useState(0);
  const cardList = (cards.map((card) => {
    return <Card card={card} />;
  }));

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(cardList.length - 1);
    }
  };

  const handleNext = () => {
    if (index < cardList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/collections/${activeId}/cards/${id}`);
      setNewCardList(cardList.filter((card) => card.props.card.id !== id));
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <section>
      <div> {cardList[index]}</div>
      <div>
      </div>
      <div>
        <div>
          {index + 1}/{cardList.length}
        </div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      <AddNewFlashcard activeId={activeId} getAllCards={getAllCards} />
        <button onClick={() => handleDelete(cards.id)}>Delete</button>
      </div>
    </section>
  );
};

export default CardContainer;
