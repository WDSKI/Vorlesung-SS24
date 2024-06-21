// pages/index.js
'use client'
import Weather from '@/components/Weather';
import '../app/globals.css';

export default function Home() {
  return (
    <div className='maincontainer'>
      <div className='body'>
        <main>
          <h1> Bogdan weather corporaton</h1>
          <Weather/>
        </main>
      </div>
    </div>
  );
}

