import { useState } from "react";
import Card from "../Card/Card";
import AddNewFlashcard from "../AddNewFlashcard/AddNewFlashcard";

const CardContainer = ({ cards, activeId, getAllCards }) => {
  const [index, setIndex] = useState(0);
  const cardList = cards.map((card) => {
    return <Card card={card} />;
  });

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
      </div>
    </section>
  );
};

export default CardContainer;
