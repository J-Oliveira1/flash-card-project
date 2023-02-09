import Collection from "../Collection/Collection";

const CollectionContainer = ({ questions }) => {
  const container = questions.map((question) => {
    return <Collection question={question} />;
  });
  return (
    <section>
      <h3>COLLECTIONS</h3>
      <table>
        <thead>
          <tr>

          </tr>
        </thead>
        <tbody>{container}</tbody>
      </table>
    </section>
  );
};

export default CollectionContainer;
