import styles from '../../styles/details.module.css';
import stars from '@/utils/ratingStars';
import { FaImage } from 'react-icons/fa';

const LoadingDetails = () => {

    const rating = stars[0];

    return (
        <>
            <section className={styles['details-img']}>
                <section className={styles['main-img']}>
                    <FaImage                        
                        width={150}
                        height={150}
                    />
                </section>                
            </section>


            <section className={styles['h2-loading']}>                
            </section>

            <section className={styles['price-rating']}>
                <div className={styles.price}>
                    <p>$$$</p>
                </div>
                <div className={styles.rating} role='figure'>{rating}</div>
            </section>

            <section className={styles['item-description']}>
                <span></span><span></span>
            </section>

            <section className={styles.buy}>
                <button type='button' >Add to Cart</button>
            </section>
        </>

    )
}

export default LoadingDetails;