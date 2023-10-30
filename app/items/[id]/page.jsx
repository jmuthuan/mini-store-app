import styles from '../../page.module.css';
import test from '../../../src/data/test-item-detail.json';
import Details from '@/app/Components/Details';

const ItemDetail = () =>{

    return(
        <main className={styles.main}>
            <div className={styles.description}>                
                <Details details={test} />                
            </div>
        </main>
    )
}

export default ItemDetail;
