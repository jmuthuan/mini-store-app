import jsonTest from '../src/data/products.json'

const getData = async (query)=>{

    return foo(query)    
}

export default getData;

const foo = (query)=>{
    console.log(query)
    const data = jsonTest.products.filter( product => 
        product.title.toLocaleLowerCase().includes(query) ||
        product.description.toLocaleLowerCase().includes(query) ||
        product.brand.includes(query) ||
        product.category.toLocaleLowerCase().includes(query)  
    )

    //console.log(data)
    return data;
}