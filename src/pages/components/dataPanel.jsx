const DataPanel = ({ fetchedData }) => {
  console.log(fetchedData);

  return (
    <>
      {fetchedData &&
        fetchedData.data.map((d) => {
          return (
            <div key={d.id}>
              <span>{d.id} - </span>
              <span>{d.title} </span>
              <span>{d.firstName} </span>
              <span>{d.lastName}</span>
              <br />
            </div>
          );
        })}
    </>
  );
};

export default DataPanel;
