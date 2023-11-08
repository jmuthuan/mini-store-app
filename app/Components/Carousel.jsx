import styles from '@/styles/carousel.module.css';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useState } from 'react';
import { styled } from 'styled-components';

const Div = styled.div`
    position: relative;
    bottom: ${props => props.$offset * 70}px;

    &.bottom-item{
        animation: bottomEnd 0.3s ease-in-out 0s 1 forwards;
    }

    &.top-item{
    position: relative;    
    animation: upEnd 0.3s ease-in-out 0s 1 forwards;
    }

    @keyframes upEnd {
        0%{bottom: 0px;}
        50%{bottom: 20px;}
        100%{bottom: 0px;}    
    }

    @keyframes bottomEnd {
        0%{bottom: ${props => props.$offset * 70}px}
        50%{bottom: ${props => props.$offset * 70 -20}px;}
        100%{bottom: ${props => props.$offset * 70}px} 
    }
`

const Carousel = ({ images, onClickImg }) => {

    const [topIndex, setTopIndex] = useState(0);

    const onClickUp = () => {
        if (images.length - topIndex <= 3) {
            const div = document.getElementsByClassName('item-img');

            for (let i = 0, length = Object.keys(div).length; i < length; i++) {
                div[i].classList.add('bottom-item')
            }
            setTimeout(() => {
                for (let i = 0, length = Object.keys(div).length; i < length; i++) {
                    div[i].classList.remove('bottom-item')
                }
            }, 500)
            return;
        }

        setTopIndex(prev => prev + 1);
    }

    const onClickDown = () => {
        if (topIndex === 0) {
            const div = document.getElementsByClassName('item-img');

            for (let i = 0, length = Object.keys(div).length; i < length; i++) {
                div[i].classList.add('top-item')
            }
            setTimeout(() => {
                for (let i = 0, length = Object.keys(div).length; i < length; i++) {
                    div[i].classList.remove('top-item')
                }
            }, 500)
            return;
        }

        setTopIndex(prev => prev - 1);
    }

    return (
        <div className={styles['carousel-container']}>
            <span onClick={onClickUp} className={styles['arrow-up']}><FaChevronUp /></span>

            {images.map(img => {
                return (
                    <Div key={img} className={`${styles['carousel-item']} item-img `} $offset={topIndex} >
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