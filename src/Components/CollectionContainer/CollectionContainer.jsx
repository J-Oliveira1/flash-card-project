import Collection from "../Collection/Collection";
import React, { useState } from 'react';



const CollectionContainer = ({ collections, getAllCards }) => {
  const collectionList = collections.map((collection) => {
    return <Collection collection={collection} getAllCards={getAllCards}/>;
  });

  function handlesubmit(event) {
    event.preventDefault();
    
  }
  return (
    <section onSubmit={handlesubmit}>
      <h3>COLLECTIONS</h3>
      <div>{collectionList}</div>
    </section>
  );
};

export default CollectionContainer;
