import Image from 'next/image';
import styles from '../../styles/details.module.css';
import stars from '@/utils/ratingStars';
import Carousel from './Carousel';
import { useState } from 'react';

const Details = ({ details }) => {

    const [mainImg, setMainImg] = useState(details.thumbnail)
    

    const handleBuyClick = (e) => {
        //TO-DO
        alert('function under development')
    }

    const onClickImg = (id) => {
        setMainImg(id);
    }

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
                    {/* {
                        details.images.map(image => {
                            return (
                                <Image
                                    src={image}
                                    alt={`more images of ${details.title}`}
                                    width={64}
                                    height={64}
                                    key={image}
                                />
                            )
                        })
                    } */}
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
                <div className={styles.rating}>{stars[Math.floor(details.rating / 0.5)]}</div>
            </section>

            <section className={styles['item-description']}>
                <p>{details.description}</p>
            </section>

            <section className={styles.buy}>
                <button type='button' onClick={handleBuyClick}>Buy</button>
            </section>
        </>
    )

}

export default Details;