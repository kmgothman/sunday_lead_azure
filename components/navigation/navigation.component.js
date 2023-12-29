'use client'

import styles from './navigation.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link'

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 0);
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array ensures the effect runs only once
    

    return (
        <div className={`${styles.nav} ${isScrolled ? styles.colorBackground : ''}`} >
            <Link href="/">
              <img src='/images/logo.png' width={isScrolled ? '110' : '150'} alt='Logo'/>
            </Link>
            <div className={styles.links}>
                <Link href="/about">ABOUT</Link>
                <Link href="/episodes">EPISODES</Link>
                <Link href="/contact">CONTACT</Link>
            </div>
        </div>
    )
}

export default Navigation