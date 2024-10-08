import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/items.module.css';
import stars from "@/utils/ratingStars";

const Item = ({ thumbnail, title, price, description, rating, id }) => {

    const rating_star = stars[Math.floor(rating/0.5)];

    return (
        <div className={styles['item-container']}>
            <Link href={`/items/${id}`}>
                <aside className={styles['image-container']}>
                    <Image
                        src={thumbnail}
                        alt={`of ${title}`}
                        width={64}
                        height={64} />
                </aside>
                <section className={styles['item-info']}>
                    <h3 className={styles.h3}>{title}</h3>
                    <p className={styles['item-description']}>{description}</p>
                    <div className={styles.price}>
                        <p>$ {price}</p>
                        <span role="figure">{rating_star}</span>
                    </div>
                </section>
            </Link>
        </div>
    )
}

export default Item;