'use client'

import styles from '../../page.module.css';
import test from '../../../src/data/test-item-detail.json';
import Details from '@/app/Components/Details';
import { useEffect, useState } from 'react';
import getDataDetails from '@/utils/getDataDetails';

const ItemDetail = ({ params }) => {
    const id = params.id;

    const [detail, setDetail] = useState();

    useEffect(() => {
        fetchDetails(id)
    }, [])

    const fetchDetails = async (id) => {
        const details = await getDataDetails(id)
        console.log(details)
        setDetail(details)
    }

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                {detail && <Details details={detail} />}
                
            </div>
        </main>
    )
}

export default ItemDetail;
