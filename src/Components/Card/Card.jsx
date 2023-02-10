const Card = ({card}) => {
    return ( 
        <tr>
            <td>{card.word}</td>
            <td>{card.definition}</td>
            <td>{card.collection}</td>
        </tr>
     );
}
 
export default Card;