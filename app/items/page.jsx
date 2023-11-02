'use client'
import { useEffect, useState } from 'react';
//import styles from '../page.module.css';
import getData from '@/utils/getData';
import Item from '../Components/Item';
import styles from '../../styles/items.module.css';


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

    return (
        <>           
            <section className={styles['results-info']}>
                <p>Search results of: "{query}"</p>
                <p>({data?.length} items found)</p>
            </section>
            <section className={styles.items}>
                {
                    data && data.map(item => {
                        return (
                            <Item
                                thumbnail={item.thumbnail}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                rating={item.rating}
                                id={item.id}
                                key={item.id} />
                        )
                    })
                }
            </section>   
        </>
    )
}

export default ItemList;