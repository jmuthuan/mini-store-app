import styles from '../../styles/searchBar.module.css';
import { Red_Hat_Display } from 'next/font/google';
import BuyCart from './BuyCart';

const red_hat = Red_Hat_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const SearchBar = ({ handleSubmit }) => {

  return (
    <section className={styles['search-bar-container']}>
      <form className={`${red_hat.className} ${styles['form-container']}`} onSubmit={handleSubmit}>
        <label htmlFor='search'>
          <input className={styles.input} type='text' placeholder='search a product...' name='search' /></label>
        <button className={styles.button} type='submit'>Search</button>
      </form>
      <BuyCart />
    </section>
  )
}

export default SearchBar;