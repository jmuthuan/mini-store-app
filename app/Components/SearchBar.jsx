const SearchBar = ({handleSubmit})=>{
    
    return(
        <form onSubmit={handleSubmit}>
          <input type='text' />
          <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;