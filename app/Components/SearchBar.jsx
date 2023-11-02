import styles from '../../styles/searchBar.module.css';

const SearchBar = ({ handleSubmit }) => {

  return (
    <form className={styles['form-container']} onSubmit={handleSubmit}>
      <label htmlFor='search'>
        <input className={styles.input} type='text' placeholder='search a product...' name='search' /></label>
      <button className={styles.button} type='submit'>Search</button>
    </form>
  )
}

export default SearchBar;