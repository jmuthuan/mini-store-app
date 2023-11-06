import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/items.module.css';
import {FaRegStar, FaStarHalfAlt, FaStar} from 'react-icons/fa';
import stars from "@/utils/ratingStars";

const Item = ({ thumbnail, title, price, description, rating, id }) => {

    console.log(rating)    
    console.log(Math.floor(rating/0.5))
    console.log(stars[Math.floor(rating/0.5)])

    return (
        <div className={styles['item-container']}>
            <Link href={`/items/${id}`}>
                <aside className={styles['image-container']}>
                    <Image
                        src={thumbnail}
                        alt={`of ${title}`}
                        width={150}
                        height={150} />
                </aside>
                <section className={styles['item-info']}>
                    <h3 className={styles.h3}>{title}</h3>
                    <p className={styles['item-description']}>{description}</p>
                    <div className={styles.price}>
                        <p>$ {price}</p>
                        <span>{stars[Math.floor(rating/0.5)]}</span>
                    </div>
                </section>
            </Link>
        </div>
    )
}

export default Item;