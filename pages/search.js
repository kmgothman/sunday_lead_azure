
import styles from '../styles/search.module.css'
import axios from 'axios';
import Parser from 'rss-parser'
import { useRouter, useEffect } from 'next/router';

// import { getFilteredEpisodes } from '../api/episodes';

import Header from '../components/header/header.component'
import Footer from '../components/footer/footer.component'
import EpisodeTable from '../components/episode_table/episode_table.component';


export async function getServerSideProps() {

  try {
    const rssFeedUrl = 'https://anchor.fm/s/db8d89f8/podcast/rss';
    const response = await axios.get(rssFeedUrl);
    const parser = new Parser();
    const feed = await parser.parseString(response.data);

    const latestEpisodes = await feed.items.slice(0,5) // Change the number to the desired count
    const allEpisodes = await feed.items
    const data = {episodes: latestEpisodes,allEpisodes:allEpisodes}
    return { props: { data } }
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
  }
}

export default function Search({ data }) {
    const router = useRouter()
    const q=decodeURIComponent(router.asPath).replace('/search?q=','')
    const queryWords = q.toLowerCase().split(' ');

    const results = data.episodes.filter((episode) => {
        const title = episode.title.toLowerCase();
        const description = episode.contentSnippet.toLowerCase();
        return queryWords.some(word => title.includes(word) || description.includes(word));

      });


  return (
    <main className={styles.main}>
      <div>
       <Header/>
        <div className={styles.panel}>
          <h1>Search results for: {q}</h1>
        </div>
        <div className={styles.episodes}> 
          <EpisodeTable episodes={results}/>
        </div>
        <Footer episodes={data.episodes}/>
      </div>
    </main>
  )
}
