import Image from 'next/image'
import styles from '../styles/home.module.css'
import axios from 'axios';
import Parser from 'rss-parser'

import Header from '../components/header/header.component'
import EpisodeCard from '../components/episode_card/episode_card.component'
import Footer from '../components/footer/footer.component'

export async function getServerSideProps() {
  try {
    const rssFeedUrl = 'https://anchor.fm/s/db8d89f8/podcast/rss';
    const response = await axios.get(rssFeedUrl);
    const parser = new Parser();
    const feed = await parser.parseString(response.data);

    const latestEpisodes = await feed.items.slice(0,6) // Change the number to the desired count
    const data = {episodes: latestEpisodes, test: 'test'}
    return { props: { data } }
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
  }
}

export default function Episodes({ data }) {

  return (
    <main className={styles.main}>
      <div>
       <Header/>
        <div className={styles.panel}>
          <h1>Can't get enough Sunday Lead?</h1>
          <p>Congrats! You've found your people.</p>
          <a>Listen</a>
        </div>
        <div className={styles.episodes}> 
          <div className={styles.searchDiv}>
            <h2>Latest Episodes</h2>
            
    
          </div>
          <div className={styles.cardContainer}>
            {data.episodes.map((episode)=> 
              {return(
                <EpisodeCard 
                  title={episode.title} 
                  description={episode.contentSnippet} 
                  imgLink={episode.itunes.image} 
                  link={episode.link}
                />)})}  
          </div>
        </div>
        <Footer episodes={data.episodes}/>
      </div>
    </main>
  )
}