
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
            <div className={styles.description}>
              <p>Interested in content that delves into the intersection of spirituality and sport? Welcome to the Sunday Lead—a platform for those intrigued by the convergence of faith and fairways. Our podcast is a meeting ground for avid golfers, spiritual seekers, and anyone intrigued by the interplay of athletic pursuit and spiritual growth.</p>
              <p>Our audience is as diverse as the conversations we foster, coming from all walks of life and every corner of the world, drawn together by a shared intrigue for what happens when the worlds of spirituality and sports collide. We don’t just celebrate the commonalities between these two worlds; we explore their unique synergy.</p>
              <p>No need to be an expert here—enthusiasm and openness are our only entry tickets. So join us as we embark on a collective exploration, learning and connecting through the compelling nexus of faith and athleticism.</p>
            </div>
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