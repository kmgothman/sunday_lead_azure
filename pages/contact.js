
import styles from '../styles/contact.module.css'
import axios from 'axios';
import Parser from 'rss-parser'

import Header from '../components/header/header.component'
import Form from '../components/subscription_form/form.component'
import Footer from '../components/footer/footer.component'

export async function getServerSideProps() {
  try {
    const rssFeedUrl = 'https://anchor.fm/s/db8d89f8/podcast/rss';
    const response = await axios.get(rssFeedUrl);
    const parser = new Parser();
    const feed = await parser.parseString(response.data);

    const latestEpisodes = await feed.items.slice(0,5) // Change the number to the desired count
    const allEpisodes = await feed.items
    const data = {episodes: latestEpisodes, test: 'test',allEpisodes:allEpisodes}
    return { props: { data } }
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
  }
}

export default function Contact({ data }) {

  return (
    <main className={styles.main}>
      <div>
       <Header/>
        <div className={styles.panel}>
          <h1>Get In Touch</h1>
        </div>
        <div className={styles.contact}> 
          <h2>contact info</h2>
          <div className={styles.row}>
            <div className={styles.column}>
              <p>jeffrey.baumbach@focus.org</p>
              <p>xxx-xxx-xxxx</p>
            </div>
            <div>
              <p>aidan.setter@focus.org</p>
              <p>xxx-xxx-xxxx</p>
          </div>
          </div>
        </div>
        <div className={styles.subscribe}>
          <h2>Subscribe to Stay Up to Date with Aidan and Will</h2>
          <Form/>
        </div>
        <Footer episodes={data.episodes}/>
      </div>
    </main>
  )
}
