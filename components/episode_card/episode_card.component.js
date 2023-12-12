import styles from './episode_card.module.css'
import Image from 'next/image'

const EpisodeCard = ({title,description,imgLink,link}) => {
    return(
        
        <div className={styles.card}>
            <a href={link}>
            <img src={imgLink} width='100%' height={'300'} alt='photo'/>
            <div className={styles.description}>
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>LISTEN NOW</h3>
            </div>
            </a>
        </div>
        
    )
}

export default EpisodeCard