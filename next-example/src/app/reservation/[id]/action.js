'use server';
export async function setData() {
  fetch('http://localhost:3000/reservation/desk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post: 'test' }),
  }).then((response) => response.json);
}

export async function getData() {
  const res = await fetch('http://localhost:3000/reservation/desk');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
