import getData from '../services/apiService';
import DataPanel from './components/dataPanel';
import { useState } from 'react';

const Dummy = () => {
  const [fetchedData, setFetchedData] = useState();

  const onClickHandler = async () => {
    var data = await getData();
    setFetchedData(data);
  };

  return (
    <>
      <button onClick={onClickHandler}>Fetch data</button>
      <DataPanel fetchedData={fetchedData} />
    </>
  );
};

export default Dummy;
