'use client'

import Image from 'next/image'
import styles from './page.module.css'
import SearchBar from './Components/SearchBar';

export default function Home() {

  const handleSubmit = (e)=>{
    e.preventDefault();

    const input = e.target.querySelector('input')
    console.log('test', input.value);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <SearchBar handleSubmit={handleSubmit} />

      </div>
    </main>
  )
}
