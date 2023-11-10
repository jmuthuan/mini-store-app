import { useEffect, useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import styles from '@/styles/buycart.module.css';
import { useRouter } from 'next/navigation';

const BuyCart = ()=>{
    const [itemCount, setItemCount] = useState(0);

    const router = useRouter();

    useEffect(()=>{
        const list = new Map(JSON.parse(localStorage.getItem('buyCart')))
        if(!list)   return;       
        setItemCount(list.size)
    },[itemCount])

    const handleOnClick = ()=>{
        router.push('/cart')
        
    }

    //sync browser tabs information
     window.addEventListener('storage', (event)=>{
        console.log('storage change');
        const list = new Map(JSON.parse(localStorage.getItem('buyCart')))       
        setItemCount(list.size)
    }) 

        return(            
            <button 
            type='button' 
            onClick={handleOnClick} 
            className={`${styles['cart-container']} ${itemCount===0 ? styles['hide_cart'] :''}`}>
                <div className={styles['cart-badge']}><span>{itemCount}</span></div>
                <FaShoppingCart role='application'/>                
            </button>
        )
}

export default BuyCart;