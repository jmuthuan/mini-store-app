import Image from "next/image";
import Link from "next/link";
import logoImg from '../../src/img/logo-store.png'


const Header = () =>{
    return(
        <header>
          <Link href={`/`}>Home</Link>
          <div>                        
            <Image src={logoImg} alt="logo of Midu-Store" />
          <h1>Midu-Store</h1>
          </div>
          <Link href={`/about`}>About</Link>
        </header>
    )
}

export default Header;