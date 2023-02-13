
import { useState } from "react";
import Card from "../Card/Card";


const CardContainer = ({cards}) => {
    const [index, setIndex] = useState(0);
    const cardList = cards.map((card) => {
        return <Card card={card}/>;
    });

    const handlePrevious = () => {
        if (index === 0){
            setIndex(cardList.lenght -1);
        }
        else {
            setIndex(index - 1)
        }
    }

    const handleNext = () => {
        if (index ===  cardList.lenght - 1 ) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }


    }
    return ( 
        <section>
            <div >{cardList[index]}</div>
            <div>
                <div>{index+1}/{cardList.length}</div>
                <button onClick={handlePrevious}>PREVIOUS</button>
                <button onClick={handleNext}>NEXT</button>
            </div>
        </section>
     );
}
 
export default CardContainer;