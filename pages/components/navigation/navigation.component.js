import styles from './navigation.module.css'

const Navigation = () => {

    return (
        <div className={styles.nav}>
            <img src='/images/logo.png' width='150px' />
            <div>
                <a>About</a>
                <a>Episodes</a>
                <a>Contact</a>
            </div>
        </div>
    )
}

export default Navigation