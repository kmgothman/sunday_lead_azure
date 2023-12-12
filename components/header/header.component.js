import Navigation from '../navigation/navigation.component'
import styles from './header.module.css'

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.social}>
                <a>Newsletter</a>
                <div>
                    <a>Insta</a>
                    <a>Spotify</a>
                    <a>X</a>
                </div>
            </div>
            <Navigation/>
        </div>
    )
}

export default Header