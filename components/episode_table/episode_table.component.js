import styles from './episode_table.module.css'
import EpisodeCell from './episode_cell/episode_cell.component'

const EpisodeTable = ({episodes}) => {
    return(
        <div className={styles.table}>
            {episodes.map((episode,index)=>{
                return(
                    <EpisodeCell 
                        key={index}
                        title={episode.title}
                        description={episode.contentSnippet}
                        imgLink={episode.itunes.image}
                        link={episode.link}
                        duration={episode.itunes.duration}
                        pubDate={episode.pubDate}
                    />
                )
            })
            }
        </div>
    )
}

export default EpisodeTable