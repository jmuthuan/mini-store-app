'use client'

import styles from './page.module.css'
import SearchBar from './Components/SearchBar';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const handleSubmit = (e)=>{
    e.preventDefault();

    const input = e.target.querySelector('input')    

    let query = input.value;
    if(input.value === '') {
      query = 'all'
    }

    input.value= '';

    router.push(`/items?search=${query.toLocaleLowerCase()}`);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <SearchBar handleSubmit={handleSubmit} />

      </div>
    </main>
  )
}
