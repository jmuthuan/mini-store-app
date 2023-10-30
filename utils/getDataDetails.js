import testDetail from '../src/data/products.json'

const getDataDetails = async (id)=>{
        return foo(id)
    
}

export default getDataDetails;

const foo = (id)=>{    
    const detail = testDetail.products.filter((product) => 
        product.id.toString() === id)
    
        return detail[0];
}