const Collection = ({ collection, getAllCards }) => {

    function handleClick() {
         getAllCards(collection.id);

    }

    return ( 
        <div onClick={handleClick}>
            {collection.title}
            
        </div>
     );
};
 
export default Collection;