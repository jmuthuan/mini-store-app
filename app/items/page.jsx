'use client'
import { useEffect, useState } from 'react';
import styles from '../page.module.css';
import getData from '@/utils/getData';
import Item from '../Components/Item';


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
        //console.log(data);
        setData(data)
    }



    return (
        <main className={styles.main}>
            <div className={styles.description}>                  
                <p>Search results of: "{query}"</p>
                <p>{data?.length} items found</p>              
                <section>
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
                                    key={item.id}/>
                            )
                        })
                    }
                </section>

            </div>
        </main>
    )
}

export default ItemList;