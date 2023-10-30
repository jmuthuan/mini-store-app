import Image from "next/image";
import Link from "next/link";

const Item = ({thumbnail, title, price, description, rating, id})=>{

    return(
        <div>
            <Link href={`/items/${id}`}>
            <aside>
                <Image 
                src={thumbnail} 
                alt={`of ${title}`}
                width={100}
                height={100}/>
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