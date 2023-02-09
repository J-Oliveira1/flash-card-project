import Collection from "../Collection/Collection";

const CollectionContainer = ({ collections }) => {
  const collectionList = collections.map((collection) => {
    return <Collection collection={collection} />;
  });
  return (
    <section>
      <h3>COLLECTIONS</h3>
      <div>{collectionList}</div>
    </section>
  );
};

export default CollectionContainer;
