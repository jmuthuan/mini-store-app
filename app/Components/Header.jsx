import Image from "next/image";
import Link from "next/link";
import logoImg from '../../src/img/logo-store.png'
import styles from '../../styles/header.module.css';


const Header = () => {
  return (
    <header className={styles['header-container']}>
      <div className={styles.link}>
        <Link href={`/`}>Home</Link>
        <Link href={`/about`}>About</Link>
      </div>

      <div className={styles['image-container']}>
        <Image src={logoImg} alt="logo of Midu-Store" priority={true} />
      </div>
    </header>
  )
}

export default Header;