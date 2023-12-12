import styles from './footer.module.css'

const Footer = ({episodes}) => {
    return (
        <div className={styles.footer}>
        <div>
          <h2>About Sunday Lead</h2>
          <p>Welcome to Sunday Lead!
            This is the podcast where you will find the intersection of faith and sports
             from a couple of guys who love them both and aren’t experts on either.
            Hosts Aidan and Will were brought together by being Catholic missionaries 
            on college campuses. Later, they bonded over a love for learning how to play golf.
            Will hails from the great state of Alabama while Aidan comes from the wheat fields 
            of Kansas. It has long been said the salt of the earth comes from midwestern friendliness 
            and southern charm. Consider this podcast the merger of both</p>
        </div>
        <div>
          <h2>Recent Episodes</h2>
          {episodes.map((episode)=> 
            {return(
              <a href={episode.link}>{episode.title}</a>
              )})} 
        </div>
        <div>
          <h2>Contact</h2>
          <p>aiden.setter@focus.org</p>
          <p>Insta X Spotify</p>
        </div>
      </div> 
    )
}

export default Footer