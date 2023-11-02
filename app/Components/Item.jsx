import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/items.module.css';

const Item = ({ thumbnail, title, price, description, rating, id }) => {

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
                <section>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div>
                        <p>{price}</p>
                        <span>{rating}</span>
                    </div>
                </section>
            </Link>
        </div>
    )
}

export default Item;