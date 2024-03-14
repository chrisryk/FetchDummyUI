const apiUrl = 'https://localhost:5000/';

const getData = async () => {
  const path = 'api/Dummy/';
  const fullPath = apiUrl + path;
  const response = await fetch(fullPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export default getData;
