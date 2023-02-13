import React, { useState } from 'react';



const Card = ({card}) => {
    const [cardFlip, setCardFlip] = useState(false);

    return ( 
        <div  onClick={() => setCardFlip(!cardFlip)}>
            {cardFlip ? card.definition : card.word}
        </div>
     );
}
 
export default Card;