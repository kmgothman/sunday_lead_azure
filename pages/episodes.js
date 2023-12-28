import Head from 'next/head'
import styles from '../styles/episodes.module.css'
import axios from 'axios';
import Parser from 'rss-parser'

import Header from '../components/header/header.component'
import EpisodeCard from '../components/episode_card/episode_card.component'
import Footer from '../components/footer/footer.component'
import Carousel from '../components/carousel/carousel.component'
import EpisodeTable from '../components/episode_table/episode_table.component';
import SearchBar from '../components/episode_search/episode_search.component';

export async function getServerSideProps() {
  try {
    const rssFeedUrl = 'https://anchor.fm/s/db8d89f8/podcast/rss';
    const response = await axios.get(rssFeedUrl);
    const parser = new Parser();
    const feed = await parser.parseString(response.data);

    const latestEpisodes = await feed.items.slice(0,9) // Change the number to the desired count
    const allEpisodes = await feed.items
    const data = {episodes: latestEpisodes, test: 'test',allEpisodes:allEpisodes}
    return { props: { data } }
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
  }
}

export default function Episodes({ data }) {

  return (
    <>
    <Head>
    <title>The Sunday Lead - Episodes</title>
    <meta name="description" content="Episode list for the Sunday Lead Podcast" />
    
    </Head>
    <main className={styles.main}>
      <div>
       <Header/>
        <div className={styles.panel}>
          <h1>Episodes</h1>
        </div>
        <div className={styles.recent}>
          <h2 >Recent</h2>
        </div>
        <Carousel episodes={data.episodes}/>
        <div className={styles.episodes}> 
          <SearchBar/>
          <EpisodeTable episodes={data.allEpisodes}/>
        </div>
        <Footer episodes={data.episodes}/>
      </div>
    </main>
    </>
  )
}
