import Navigation from '../navigation/navigation.component'
import styles from './header.module.css'
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.social}>
                <a>Newsletter</a>
                <div >
                    <a href='https://www.instagram.com/sundayleadpod/'><FaInstagram className={styles.icon} /></a>
                    <a href='https://open.spotify.com/show/4qvEFOl1hUsDmGStvtptws?si=3mVFBoR1TFSPsQZkw5sBfw'><FaSpotify className={styles.icon} /></a>
                    <a href='https://anchor.fm/s/db8d89f8/podcast/rss'><FaRss className={styles.icon} /></a>
                </div>
            </div>
            <Navigation/>
        </div>
    )
}

export default Header