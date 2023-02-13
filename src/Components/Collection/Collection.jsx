const Collection = ({ collection, getAllCards, activeId, setActiveId}) => {
  function handleClick() {
    setActiveId(collection.id);
  }

  return <div onClick={handleClick}>{collection.title}</div>;
};

export default Collection;
