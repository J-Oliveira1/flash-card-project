import Collection from "../Collection/Collection";
import React, { useState } from "react";

const CollectionContainer = ({
  collections,
  getAllCards,
  activeId,
  setActiveId,
}) => {
  const collectionList = collections.map((collection) => {
    return (
      <Collection
        collection={collection}
        getAllCards={getAllCards}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    );
  });

  function handlesubmit(event) {
    event.preventDefault();
  }
  return (
    <aside onSubmit={handlesubmit}
    style={{ width: "200px", height: "100vh", backgroundColor: "#4e5465", color: "white", padding: "20px" }}>
      <h4>COLLECTIONS</h4>
      <div>{collectionList}</div>
    </aside>
  );
};

export default CollectionContainer;
