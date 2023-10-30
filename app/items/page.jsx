import styles from '../page.module.css';
import test from '../../src/data/test-item-detail.json';

const ItemList = () =>{

    return(
        <main className={styles.main}>
            <div className={styles.description}>
                <div>TO-DO display results</div>
                
            </div>
        </main>
    )
}

export default ItemList;