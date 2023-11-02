import styles from '../../styles/footer.module.css'

const Footer = ()=>{
    return(
        <footer className={styles['footer-container']}>
            <div>Developed by: José Muthuan</div>
            <div>Copyright © {new Date().getFullYear()}  - All Rights Reserved</div>
        </footer>
    )
}

export default Footer;