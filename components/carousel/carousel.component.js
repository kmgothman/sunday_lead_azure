import CarouselCard from "./carousel_card/carousel_card.component";
import styles from './carousel.module.css'
import { useState, useEffect } from "react";

const Carousel = ({ episodes }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const stylesArray = ['hiddenLeft','offLeft','leftLeft','left','center','right','rightRight','offRight','hiddenRight']

    const prevCard = () => {
      setCurrentIndex((currentIndex + 1)%9);
      console.log(stylesArray[currentIndex])
    };
  
    const nextCard = () => {
      setCurrentIndex((currentIndex-1+9)%9);
    };
    return (
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {episodes.map((episode,index)=>{
            return(
              <CarouselCard  
                key={index}
                title={episode.title} 
                description={episode.contentSnippet} 
                imgLink={episode.itunes.image} 
                link={episode.link}
                position={stylesArray[(currentIndex+index)%9]}
            />
            )
          })}
        </div>
        <button className={`${styles.button} ${styles.buttonLeft}`} onClick={prevCard}>{'<'}</button>
        <button className={`${styles.button} ${styles.buttonRight}`} onClick={nextCard}>{'>'}</button>
      </div>
    );
  };
  
  export default Carousel;