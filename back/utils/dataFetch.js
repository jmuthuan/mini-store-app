import jsonTest from '../products.json' assert {type: 'json'};;

export const searchQuery = async (query) => {
    const data = await jsonTest.products.filter(product =>
        product.title.toLocaleLowerCase().includes(query) ||
        product.description.toLocaleLowerCase().includes(query) ||
        product.brand.includes(query) ||
        product.category.toLocaleLowerCase().includes(query)
    )

    return data;
}

export const dataDetail = async (id) => {
    
    const detail = await jsonTest.products.filter((product) =>    
        product.id.toString() === id)
       
    return detail[0];
}
