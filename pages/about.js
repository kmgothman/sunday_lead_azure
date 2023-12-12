
import axios from 'axios';
import Parser from 'rss-parser'
import styles from '../styles/about.module.css'

import Header from '../components/header/header.component'
import EpisodeCard from '../components/episode_card/episode_card.component'
import Footer from '../components/footer/footer.component'
import HostCard from '../components/host_card/host_card.component'

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

const About = ({data}) => {
    const aboutAidan = "I am from Topeka, KS and graduated from The University of Kansas in December 2020. At KU, I was introduced to FOCUS. Sincerely, FOCUS and The St. Lawrence Catholic Campus Center altered the trajectory of my life. I went from knowing who Jesus was, to actually knowing Jesus. John Michael Lucido and the other missionaries were there for me in the lowest moments of my life. They built me up and taught me how to live the life of a disciple of Jesus Christ. I was able to lead a bible study in my fraternity, Alpha Tau Omega, and work with two younger students in discipleship. These opportunities were very important in my deeper conversion in college. I found I was more fulfilled leading men to Christ than anything I did at KU. Due to this and my own relationship with my missionary, I said yes to serving Christ on the college campus. It has been really cool to see Christ work in my life but also in the lives of the people around me. I am excited to see what doors Jesus opens and where he leads me in the future. Praise God! Rock Chalk Jayhawk!"
    const aboutWill = "As a missionary, my greatest desire is to lead all students to Christ. My life has been transformed by Jesus and I want nothing more than to bring this joy to others and introduce them to the life-changing message of the Gospel. In His ministry on earth, Jesus humbled Himself to meet us on our level, taking on our humanity, and spent most of His time investing deeply in a few. I look to Jesus’ own example to find the best method of reaching the world. I’ve been constantly amazed by the different souls I’ve encountered on campus."
    return(
        <main className={styles.main}>
      <div>
       <Header/>
        <div className={styles.panel}>
          <h1 >About Us</h1>
        </div>
        <div>
            <h2 className={styles.heading}>About You</h2>
        </div>
        <div className={styles.aboutYou}>
            <img src='/images/logo.png'/>
            <p>Are you a Christian looking for some quality content? Then the Sunday 
                Lead is for you! Whether you're a seasoned golfer, a devout believer, 
                or simply someone navigating the fascinating crossroads of spirituality 
                and athletics, you've found your community. Our listeners share a 
                curiosity for the unexplored territories of these two realms, seeking 
                a harmonious balance in a world that often separates them. Hailing from 
                various corners of the globe, our community mirrors the rich blend of 
                experiences that make up our hosts' backgrounds—be it the heartland 
                warmth of the Midwest or the unmistakable charm of the southern states. 
                Here, we celebrate the shared love for faith and sports, recognizing 
                that expertise is not a prerequisite, but passion and an open heart 
                certainly are. Join us on this journey where we explore, learn, and 
                unite in the fascinating intersection of these two extraordinary facets 
                of life.</p>
        </div>
        <div className={styles.hosts}>
            <HostCard description={aboutAidan} imageSrc={'/images/aidan.png'} color={'#239678'}/>
            <HostCard description={aboutWill} imageSrc={'/images/will.png'} color={'#6cb0e1'}/>
        </div>

        <Footer episodes={data.episodes}/>
      </div>
    </main>
        
    )
}

export default About