'use client';
import { useState } from 'react';

export default function Btn() {
  const [click, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks((val) => (val += 1))}>{click}</button>
  );
}
