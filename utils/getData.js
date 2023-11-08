const getData = async (query) => {
    //console.log(query)
    const API_URL_LOCAL = 'http://localhost:8000/api/items';
    const API_URL = 'https://midu-store-api.onrender.com/api/items'

    try {
        const data = await fetch(`${API_URL}?q=${query}`)
            .then(response => response.json())
            //.then(data => )
        return data;    
    } catch (error) {
        console.log(error)
    }
}

export default getData;