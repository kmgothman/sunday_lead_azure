'use client'

import styles from './host_card.module.css'
import { useState } from 'react';

const HostCard = ({imageSrc,description, color}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardFlip = () => {
      setIsFlipped(!isFlipped);
      console.log('flip')
    };
  
    return (
      <div
        className={styles.flipCard}
        // onMouseEnter={handleCardFlip}
        // onMouseLeave={handleCardFlip}
        style={{backgroundColor: color}}
      >
        <div className={styles.flipCardInner}>
            {isFlipped ? 
                <div className={styles.flipCardBack}>
                    <p>{description}</p>
                </div>
            :
                <div className={styles.flipCardFront}>
                    <img src={imageSrc} alt="Card" />
                </div>
            }
        </div>
      </div>
    );
}

export default HostCard

// styles.flip-card isFlipped ? styles.flipped : ''}