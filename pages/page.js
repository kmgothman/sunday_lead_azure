
// import Image from 'next/image'
// import styles from './page.module.css'
// import axios from 'axios';
// import Parser from 'rss-parser'
// import useEffect from 'react'

// import Header from './components/header/header.component'
// import EpisodeCard from './components/episode_card/episode_card.component'

// const fetchEpisodes = async () => {
//   try {
//     const rssFeedUrl = 'https://anchor.fm/s/db8d89f8/podcast/rss';
//     const response = await axios.get(rssFeedUrl);
//     const parser = new Parser();
//     const feed = await parser.parseString(response.data);

//     // Extract the latest episodes
//     const latestEpisodes = await feed.items.slice(0,6) // Change the number to the desired count
//     return latestEpisodes
//     // setEpisodes(latestEpisodes);
//   } catch (error) {
//     console.error('Error fetching podcast episodes:', error);
//   }
// };

// export default async function Home() {

//   let episodes = await fetchEpisodes()


//   return (
//     <main className={styles.main}>
//       <div>
//        <Header/>
//         <div className={styles.panel}>
//           <h1>Can't get enough Sunday Lead? </h1>
//           <p>Congrats! You've found your people.</p>
//           <a>Listen</a>
//         </div>
//         <div className={styles.medias}>
//           <a href='https://podcasts.apple.com/us/podcast/sunday-lead/id1674646958'><Image src="/icons/apple.png" alt="Apple" width={150} height={150} /></a>
//           <a><Image src="/icons/youtube.png" alt="Youtube" width={150} height={150} /></a>
//           <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9kYjhkODlmOC9wb2RjYXN0L3Jzcw?sa=X&ved=0CAMQ4aUDahcKEwiAi4y2nMmCAxUAAAAAHQAAAAAQNg'><Image src="/icons/google.png" alt="Googe" width={150} height={150} /></a>
//           <a href='https://open.spotify.com/show/4qvEFOl1hUsDmGStvtptws?si=3mVFBoR1TFSPsQZkw5sBfw'><Image src="/icons/spotify.png" alt="Spotify" width={150} height={150} /></a>
//         </div>
//         <div className={styles.episodes}> 
//           <div className={styles.searchDiv}>
//             <h2>Latest Episodes</h2>
//             <input type="text" id="searchInput" placeholder="Search..."></input>
    
//           </div>
//           <div className={styles.cardContainer}>
//             {episodes.map((episode)=> 
//               {return(
//                 <EpisodeCard 
//                   title={episode.title} 
//                   description={episode.contentSnippet} 
//                   imgLink={episode.itunes.image} 
//                   link={episode.link}
//                 />)})}  
//           </div>
//         </div>
//         <div className={styles.footer}>
//           <div>
//             <h2>About Sunday Lead</h2>
//             <p>Welcome to Sunday Lead!
//               This is the podcast where you will find the intersection of faith and sports
//                from a couple of guys who love them both and aren’t experts on either.
//               Hosts Aidan and Will were brought together by being Catholic missionaries 
//               on college campuses. Later, they bonded over a love for learning how to play golf.
//               Will hails from the great state of Alabama while Aidan comes from the wheat fields 
//               of Kansas. It has long been said the salt of the earth comes from midwestern friendliness 
//               and southern charm. Consider this podcast the merger of both</p>
//           </div>
//           <div>
//             <h2>Recent Episodes</h2>
//             {episodes.map((episode)=> 
//               {return(
//                 <a href={episode.link}>{episode.title}</a>
//                 )})} 
//           </div>
//           <div>
//             <h2>Contact</h2>
//             <p>aiden.setter@focus.org</p>
//             <p>Insta X Spotify</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }
