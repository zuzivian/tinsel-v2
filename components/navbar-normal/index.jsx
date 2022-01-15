import Link from 'next/link'
import styles from './navbar-normal.module.css'
import { useCart } from '../../lib/cart'

export default function Navbar() {

    const teas = useCart()
    const cartLength = teas.reduce(function (accumulator, tea) {
        return accumulator + tea.quantity
    }, 0)

    return (
        <header className={styles.header}>
            <div className={styles.navdiv}>
                <nav className={styles.nav}>
                    <a href="index.html" className={styles.logo}>Tinsel</a>
                    <ul className={styles.navul}>
                        <li>
                            <Link href="/">
                                <a className={styles.navlink}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/catalogue">
                                <a className={styles.navlink}>Catalogue</a>
                            </Link>
                        </li>
                    </ul>
                    <Link href="/api/auth/login">
                        <a className={styles.login}>Login</a>
                    </Link>
                    <Link href="/cart">
                        <a className={styles.login}>Cart ({cartLength})</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

