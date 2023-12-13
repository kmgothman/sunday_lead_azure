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
              <img src='/images/logo.png' width={isScrolled ? '110' : '150'} />
            </Link>
            <div>
                <Link href="/about">About</Link>
                <Link href="/episodes">Episodes</Link>
                <a>Contact</a>
            </div>
        </div>
    )
}

export default Navigation