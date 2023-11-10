import Image from 'next/image';
import styles from '../../styles/details.module.css';
import stars from '@/utils/ratingStars';
import Carousel from './Carousel';
import { useState } from 'react';

const Details = ({ details }) => {

    const [mainImg, setMainImg] = useState(details.thumbnail)
   
    const handleBuyClick = (e) => {
        let buy = new Map(JSON.parse(localStorage.getItem('buyCart')));
        buy.set(details.id, details)
        localStorage.setItem('buyCart', JSON.stringify([...buy]));
        
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('storage'));        
        }
        
    }
 
    const onClickImg = (id) => {
        setMainImg(id);
    }

    const rating = stars[Math.floor(details.rating / 0.5)]

    return (
        <>
            <section className={styles['details-img']}>
                <section className={styles['main-img']}>
                    <Image
                        src={mainImg}
                        alt={`images of ${details.title}`}
                        width={150}
                        height={150}
                        priority={true}
                    />
                </section>
                <aside className={styles.carrousel}>
                    <Carousel images={details.images}
                        onClickImg={onClickImg} />                    
                </aside>
            </section>


            <section className={styles.h2}>
                <h2>{details.title}</h2>
            </section>

            <section className={styles['price-rating']}>
                <div className={styles.price}>
                    <p>$ {details.price}</p>
                    <p>({details.stock} available)</p>
                </div>
                <div className={styles.rating} role='figure'>{rating}</div>
            </section>

            <section className={styles['item-description']}>
                <p>{details.description}</p>
            </section>

            <section className={styles.buy}>
                <button type='button' onClick={handleBuyClick}>Add to Cart</button>
            </section>
        </>
    )

}

export default Details;