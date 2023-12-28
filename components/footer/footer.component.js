import styles from './footer.module.css'
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

const Footer = ({episodes}) => {
    return (
        <div className={styles.footer}>
          <div className={styles.column}>
            <h2>About Sunday Lead</h2>
            <p>Welcome to Sunday Lead!
              This is the podcast where you will find the intersection of faith and sports
              from a couple of guys who love them both and aren’t experts on either.
              Hosts Aidan and Will were brought together by being Catholic missionaries 
              on college campuses. Later, they bonded over a love for learning how to play golf.
              Will hails from the great state of Alabama while Aidan comes from the wheat fields 
              of Kansas. It has long been said the salt of the earth comes from midwestern friendliness 
              and southern charm. Consider this podcast the merger of both</p>
          </div>
          <div className={styles.column}>
            <h2>Recent Episodes</h2>
            {episodes.map((episode)=> 
              {return(
                <a href={episode.link}>{episode.title}</a>
                )})} 
          </div>
          <div className={styles.column}>
            <h2>Contact</h2>
              <p>sundaylead23@gmail.com</p>
              <div className={styles.social}>
              <a href='https://www.instagram.com/sundayleadpod/'><FaInstagram className={styles.icon} /></a>
              <a href='https://open.spotify.com/show/4qvEFOl1hUsDmGStvtptws?si=3mVFBoR1TFSPsQZkw5sBfw'><FaSpotify className={styles.icon} /></a>
              <a href='https://anchor.fm/s/db8d89f8/podcast/rss'><FaRss className={styles.icon} /></a>
              </div>
          </div>
      </div> 
    )
}

export default Footer