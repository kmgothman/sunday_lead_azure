'use client'

import styles from './host_card.module.css'
import { useState, useRef} from 'react';

const HostCard = ({imageSrc,description, color}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleEnter = (event) => {
    setIsFlipped(true)
  }
    const handleLeave = () => {
      setIsFlipped(false)
    }
    const handleClick = () => {
      setIsFlipped(!isFlipped)
    }
  
    return (
      <div 
        className={styles.flipCardContainer}
        onMouseLeave={handleLeave}
        onMouseEnter={handleEnter}
        onClick={handleClick}
      >
        <div
          className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`}
          style={{backgroundColor: color}}
        >
          {isFlipped ? 
            <div className={styles.cardBack}>
              <p>{description}</p>
            </div>
          :
            <div className={styles.cardFront} >
              <img src={imageSrc} alt="Card" />
            </div>
          }
        </div>
      </div>
    );
}

export default HostCard

