'use client'

import Item from "../Components/Item";
import styles from '@/styles/items.module.css';
import { FaTrashAlt } from 'react-icons/fa'

const Cart = () => {
    let products = JSON.parse(localStorage.getItem('buyCart'))

    let data = [];

    products.forEach(value => {
        data.push(value[1])
    });


    return (
        <section className={styles.items}>
            {
                data.length > 0 && data.map(item => {
                    return (
                        <div className={styles['item-cart']}>
                            <Item
                                key={item.id}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                rating={item.rating}
                                id={item.id}
                            />
                            <div className={styles['cart-trash']} key={item.id}>
                                <FaTrashAlt  />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Cart;