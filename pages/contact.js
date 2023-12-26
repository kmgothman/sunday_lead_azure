
import styles from '../styles/contact.module.css'

import Header from '../components/header/header.component'
import Footer from '../components/footer/footer.component'
import EpisodeTable from '../components/episode_table/episode_table.component';

// export async function getServerSideProps() {

//     try {
//       const rssFeedUrl = 'https://anchor.fm/s/db8d89f8/podcast/rss';
//       const response = await axios.get(rssFeedUrl);
//       const parser = new Parser();
//       const feed = await parser.parseString(response.data);
  
//       const latestEpisodes = await feed.items.slice(0,5) // Change the number to the desired count
//       const allEpisodes = await feed.items
//       const data = {episodes: latestEpisodes,allEpisodes:allEpisodes}
//       return { props: { data } }
//     } catch (error) {
//       console.error('Error fetching podcast episodes:', error);
//       return { props: {}}
//     }
//   }

export default function Contact({ data }) {
    
  return (
    <main className={styles.main}>
      <div>
       <Header/>
        <div className={styles.panel}>
          <h1>Contact info</h1>
        </div>
        <div className={styles.episodes}> 
          <h2>contact info</h2>
        </div>
        {/* <Footer episodes={data.episodes}/> */}
      </div>
    </main>
  )
}