'use server';

export async function setReservation() {
  //sync communication
  //   const data = fetch('http://localhost:3000/tables', {
  //     method: 'POST',
  //     body: JSON.stringify({ id: '789' }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => return data);
  //     .catch((error) => console.error('Error fetching data:', error));
  // async communication
  const fetchData = await fetch('http://localhost:3000/tables', {
    method: 'POST',
    body: JSON.stringify({ id: '789' }),
  });
  const data = await fetchData.json();
  return data;
}
