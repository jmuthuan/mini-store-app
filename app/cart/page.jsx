'use client'

import Item from "../Components/Item";
import styles from '@/styles/items.module.css';
import { useEffect, useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const Cart = () => {

    const [data, setData] = useState()
    let products;// = JSON.parse(localStorage.getItem('buyCart'))

    const router = useRouter();

    useEffect(() => {
        products = JSON.parse(localStorage.getItem('buyCart'))
        let newData = Array.from(products, (value) => value[1])
        setData(newData)
    }, [])

    'use client'
    const handleTrashClick = (id) => {
        if (typeof window !== 'undefined') {
            // Your client-side code that uses window goes here
            const newProducts = products.filter(element => (element[0] !== id))
            localStorage.setItem('buyCart', JSON.stringify([...newProducts]));

            let newData = Array.from(newProducts, (value) => value[1])
            setData(newData)

            window.dispatchEvent(new Event('storage'))


            if (newProducts.length < 1) {
                router.push('/');
            }
        }

    };


    return (
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
                            <div className={styles['cart-trash']}
                                role="application"
                                onClick={() => handleTrashClick(item.id)}>
                                <FaTrashAlt />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Cart;