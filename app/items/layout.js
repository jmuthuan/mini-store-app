'use client'
import { useRouter } from "next/navigation";
import SearchBar from "../Components/SearchBar";
import styles from '../page.module.css';

export default function ItemsLayout({ children }) {

  const router = useRouter();

  const handleSubmit = (e)=>{
    e.preventDefault();

    const input = e.target.querySelector('input')
    console.log('test', input.value);

    let query = input.value;
    if(input.value === '') {
      query = 'all'
    }

    input.value= '';

    router.push(`/items?search=${query}`);
  }
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <SearchBar handleSubmit={handleSubmit}/>
                {children}
            </div>
        </main>
    )
}