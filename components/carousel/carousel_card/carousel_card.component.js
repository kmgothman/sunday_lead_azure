import styles from './carousel_card.module.css'
const CarouselCard = ({title,description,imgLink,link,position}) => {
    return(
        
        <div className={`${styles.card} ${styles[position]}`}>
            <a href={link}>
            <img src={imgLink} width='100%' alt='photo'/>
            <div className={styles.description}>
                <h2>{title}</h2>
                <h3>LISTEN NOW</h3>
            </div>
            </a>
        </div>
        
    )
}

export default CarouselCard