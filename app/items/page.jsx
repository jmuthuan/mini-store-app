'use client'
import { useEffect, useState } from 'react';
import getData from '@/utils/getData';
import Item from '../Components/Item';
import styles from '../../styles/items.module.css';
import { FaShoppingCart } from 'react-icons/fa'
import { Prosto_One } from 'next/font/google';


const ItemList = () => {
    const [data, setData] = useState()
    const [query, setQuery] = useState('')

    useEffect(() => {
        const search = new URLSearchParams(window.location.search)
        fetchData(search.get('search'));
        setQuery(search.get('search'));
    }, [])

    const fetchData = async (query) => {
        const data = await getData(query)
        setData(data)
    }

    const handleBuyClick = (id) => {
        const products = new Map(JSON.parse(localStorage.getItem('buyCart')));
        products.set(id, data.find(element => element.id = id))
       /*  console.log(products)
        console.log(data.find(element => element.id = id)) */
        localStorage.setItem('buyCart', JSON.stringify([...products]));

        window.dispatchEvent(new Event("storage"));   
        
    };

    return (
        <>
            <section className={styles['results-info']}>
                <p>{`Search results of: "${query}"`}</p>
                <p>({data?.length} items found)</p>
            </section>
            <section className={styles.items}>
                {
                    data && data.map(item => {
                        return (
                            <div className={styles['item-list']} key={item.id}>
                                <Item
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    price={item.price}
                                    description={item.description}
                                    rating={item.rating}
                                    id={item.id}
                                />
                                <div className={styles['cart-buy']}
                                    role="application"
                                    onClick={() => handleBuyClick(item.id)}>
                                    <FaShoppingCart />
                                </div>
                            </div>

                        )
                    })
                }
            </section >
        </>
    )
}

export default ItemList;