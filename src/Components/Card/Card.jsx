import React, { useState } from "react";

const Card = ({ card }) => {
  const [cardFlip, setCardFlip] = useState(false);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        border: "5px solid #907078",
        padding: "12px 84px",
        margin: "0px 0"
      }}
    >
      <div
        onClick={() => setCardFlip(!cardFlip)}
        style={{ width: "", backgroundColor: "white", padding: "20px" }}
      >
        {cardFlip ? card.definition : card.word}
      </div>
    </main>
  );
};

export default Card;


