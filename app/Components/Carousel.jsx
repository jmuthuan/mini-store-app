import styles from '@/styles/carousel.module.css';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useState } from 'react';
import {styled} from 'styled-components';

const Div = styled.div`
    position: relative;
    bottom: ${props =>props.$offset *70}px;
`

const Carousel = ({ images, onClickImg }) => {

    const [topIndex, setTopIndex] = useState(0);
    const [bottomIndex, setBottomIndex] = useState((images.length > 2) ? 2 : images.length)

    const onClickUp = () => {
        console.log('click up')
        if (images.length - topIndex <= 3) {
            console.log('no more items', topIndex + " - " + bottomIndex + " - length:"+images.length) ;
            return;
        }

        setTopIndex(prev => prev + 1);
        setBottomIndex(prev => prev + 1)
    }

    const onClickDown = () => {
        console.log('click down')
        if (bottomIndex <= 2) {
            console.log('no more items', topIndex + " - " + bottomIndex);
            return;
        }

        setTopIndex(prev => prev - 1);
        setBottomIndex(prev => prev - 1)
    }

    return (
        <div className={styles['carousel-container']}>
            <span onClick={onClickUp} className={styles['arrow-up']}><FaChevronUp /></span>

            {images.map(img => {
                return (
                    <Div key={img} className={styles['carousel-item']} $offset={topIndex} >
                        <Image src={img} alt='product image' width={64} height={64}
                            onClick={(e) => onClickImg(e.target.name)}
                            name={`${img}`} />
                    </Div>
                )
            })}

            <span onClick={onClickDown} className={styles['arrow-down']}><FaChevronDown /></span>

        </div>
    )
}

export default Carousel;