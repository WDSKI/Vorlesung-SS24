'use server';

export async function setReservation() {
  fetch('http://localhost:3000/tables', {
    method: 'POST',
    body: JSON.stringify({ id: '789' }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error('Error fetching data:', error));
}
