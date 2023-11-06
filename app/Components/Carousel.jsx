import styles from '@/styles/carousel.module.css';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Carousel = ({images}) => {

    const onClickUp = ()=>{
        console.log('click up')
    }

    const onClickDown = ()=>{
        console.log('click down')
    }

    return (
        <div className={styles['carousel-container']}>
            <span onClick={onClickUp} className={styles['arrow-up']}><FaChevronUp /></span>

            {images.map(img => {
                return (
                    <div key={img} className={styles['carousel-item']}>
                        <Image src={img} alt='product image' width={64} height={64}/>
                    </div>
                )
            })}

            <span onClick={onClickDown}  className={styles['arrow-down']}><FaChevronDown /></span>

        </div>
    )
}

export default Carousel;