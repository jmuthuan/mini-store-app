import jsonTest from '../products.json' assert {type: 'json'};

export const getSearchItems = async (req, res)=>{

        const query = req.query.q;
        console.log('query search...', req.query)
        //res.send('holanda')
        const data = jsonTest.products.filter( product => 
            product.title.toLocaleLowerCase().includes(query) ||
            product.description.toLocaleLowerCase().includes(query) ||
            product.brand.includes(query) ||
            product.category.toLocaleLowerCase().includes(query)  
        )
    
        console.log(data)

        res.send(data)
        //return data;
  

    //return null;
}

export const getItemDetail = async (req, res)=>{
    console.log('details...', req.params.id)
    res.send('hello world')

    const id = req.params.id

    const detail = jsonTest.products.filter((product) => 
        product.id.toString() === id)
    
        console.log(detail[0])
        res.send(detail[0])
        //return detail[0];

    
}
