const getDataDetails = async (id) => {
        const API_URL_LOCAL = 'http://localhost:8000/api/items';
        const API_URL = 'https://midu-store-api.onrender.com/api/items'

        try {
                const details = fetch(`${API_URL}/${id}`)
                        .then(response => response.json())
                        .catch(rej => console.log(rej))
                return details;

        } catch (error) {
                console.log(error);
        }
}

export default getDataDetails;