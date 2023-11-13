import styles from '@/styles/items.module.css';
import { FaImage, FaShoppingCart } from 'react-icons/fa';
import stars from '@/utils/ratingStars';


const LoadingItem = () => {

    const rating = stars[0];

    return (
        <div className={styles['item-list']}>            
            <div className={`${styles['item-container']} ${styles['item-container-loader']}`}>
                <aside className={styles['image-container']}>
                    <FaImage
                        width={64}
                        height={64} />
                </aside>
                <section className={styles['item-info']}>
                    <h3 className={styles['h3-loader']}></h3>
                    <p className={styles['item-description-loader']}>
                        <span></span><span></span>
                    </p>

                    <div className={`${styles.price} ${styles['price-loading']}`}>
                        <p>$$$</p>
                        <span role="figure">{rating}</span>
                    </div>

                </section>
            </div>

            <div className={styles['cart-buy']}>
                                <FaShoppingCart />
                            </div>            
        </div>
    )
}

export default LoadingItem;