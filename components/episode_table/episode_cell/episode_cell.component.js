import styles from './episode_cell.module.css'
import { useState } from 'react'

const EpisodeCell = ({title,description,imgLink,link,pubDate,duration}) => {
    const [moreToggle, setMoreToggle] = useState(false)
    const dateArray=pubDate.split(' ')
    const date=dateArray[2]+' '+dateArray[1]+' '+dateArray[3]

    const snippit=description.split(' ').slice(0,6).map((word)=>{return(word+' ')})

    const moreClick = (event) => {
        event.preventDefault();
        setMoreToggle(!moreToggle)
    }

    return(
        <li className={styles.list}>
        <a href={link}>
        <div className={styles.cell}>
            <div className={styles.left}>
                <img src={imgLink} alt='episode image'/>
            </div>
            <div className={styles.middle}>
                <h3>{title}</h3>
                {moreToggle ? 
                    <p>{description}</p>
                :
                    <p>{snippit}</p>
                }
                {moreToggle ? 
                    <></>
                :
                    <p style={{fontWeight:'bold'}}>. . .</p>
                }
                <p onClick={moreClick} className={styles.more}>{moreToggle ? 
                    'See Less'
                :
                    'See More'
                }</p>
                
                
            </div>
            <div className={styles.right}>
                <p>{date}</p>
                <p>{duration}</p>
            </div>
        </div>
        </a>
        </li>
    )
}

export default EpisodeCell