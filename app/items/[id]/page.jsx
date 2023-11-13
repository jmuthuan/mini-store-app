'use client'

import styles from '@/styles/details.module.css';
import Details from '@/app/Components/Details';
import { useEffect, useState } from 'react';
import getDataDetails from '@/utils/getDataDetails';
import LoadingDetails from '@/app/Components/LoadingDetails';

const ItemDetail = ({ params }) => {
    const id = params.id;

    const [detail, setDetail] = useState();

    useEffect(() => {
        fetchDetails(id)
    }, [id])

    const fetchDetails = async (id) => {
        const details = await getDataDetails(id)
        setDetail(details)
    }

    
    return (
        <div className={styles['details-container']}> 
                {!detail && <LoadingDetails />}           
                {detail && <Details details={detail} />}           
        </div>
    )
}

export default ItemDetail;
