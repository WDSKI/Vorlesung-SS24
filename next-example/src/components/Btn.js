'use client';
import { useEffect, useState } from 'react';

export default function Btn({ asyncProps }) {
  const [data, setData] = useState('');
  const [reloadForm, setReloadForm] = useState(false);
  // useEffect(() => {
  //   if (reloadForm) {
  //     fetch('http://localhost:3000/reservation/desk')
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.error('Error fetching data:', error));
  //     setReloadForm(false);
  //   }
  // }, [reloadForm]);
  //
  //server actions in client components
  const handleClick = async () => {
    if (!reloadForm) {
      const data = await asyncProps();
      setReloadForm(true);
    }
  };
  //async function and await
  // const handleClick = async () => {
  //   const response = await fetch('http://localhost:3000/tables');
  //   console.log(await response.json());
  // };
  //sync function and await
  useEffect(() => {
    fetch('http://localhost:3000/tables')
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [reloadForm]);
  // const handleClick = () => {
  //   fetch('http://localhost:3000/tables', {
  //     method: 'POST',
  //     body: JSON.stringify({ id: '789' }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  //   setReloadForm((a) => !a);
  // };
  return (
    <>
      <button onClick={() => handleClick()}>Test</button>
    </>
  );
}
