'use client'

import styles from './host_card.module.css'
import { useState, useRef} from 'react';

const HostCard = ({imageSrc,description, color}) => {
    const cardDivRef = useRef(null)
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardFlip = (event) => {
      const { clientX, clientY } = event;
      const cardDiv = cardDivRef.current;
      console.log(cardDiv)
      
      if (cardDiv) {
        const rect = cardDiv.getBoundingClientRect();
        const isMouseInside = (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        )
        if (isMouseInside) {
          setIsFlipped(true)
        } else {
          setIsFlipped(false)
        }
    };
  }
  
    return (
      <div 
        className={styles.flipCardContainer}
        onMouseMove={handleCardFlip}
        onMouseLeave={handleCardFlip}
        ref={cardDivRef}
        // onMouseEnter={handleCardFlip}
        // onMouseLeave={handleCardFlip}
      >
        <div
          className={styles.flipCard}
          style={{backgroundColor: color}}
        >
          {isFlipped ? 
                  <p>{description}</p>
          :
                  <img src={imageSrc} alt="Card" />
          }
        </div>
      </div>
    );
}

export default HostCard

// styles.flip-card isFlipped ? styles.flipped : ''}