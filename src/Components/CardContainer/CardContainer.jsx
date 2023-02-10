import Card from "../Card/Card";


const CardContainer = ({cards}) => {
    const cardList = cards.map((card) => {
        return <Card card={card}/>;
    });
    return ( 
        <section>
            <div>{cardList}</div>
        </section>
     );
}
 
export default CardContainer;