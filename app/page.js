'use client'

import styles from './page.module.css'
import SearchBar from './Components/SearchBar';
import { useRouter } from 'next/navigation';
import BuyCart from './Components/BuyCart';
//import productTest from '@/src/data/products.json';



export default function Home() {
 
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const input = e.target.querySelector('input')

    let query = input.value;
    if (input.value === '') {
      query = 'all'
    }

    input.value = '';

    router.push(`/items?search=${query.toLocaleLowerCase()}`);
  }



  return (
    <main className={styles.main}>
      <div className={styles.description}>        
          <SearchBar handleSubmit={handleSearch} />
          <BuyCart />      
      </div>
    </main>
  )

  
}
