import { dataDetail, searchQuery } from '../utils/dataFetch.js';


export const getSearchItems = async (req, res) => {

    const query = req.query.q;
    const data = await searchQuery(query);

    //console.log(data)
    res.json(data)
}

export const getItemDetail = async (req, res) => {
    
    const id = req.params.id
    const detail = await dataDetail(id);

    //console.log(detail)
    res.json(detail)
}
