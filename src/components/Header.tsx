import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <a href="#" className={styles.logo}>Netflix</a>
          <div className={styles.navLinks}>
            <a href="#" className={`${styles.navLink} ${styles.activeNav}`}>Home</a>
            <a href="#" className={styles.navLink}>Movies</a>
            <a href="#" className={styles.navLink}>TV Shows</a>
            <a href="#" className={styles.navLink}>New & Popular</a>
            <a href="#" className={styles.navLink}>My List</a>
          </div>
        </div>
        <div className={styles.navRight}>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search" className={styles.searchInput} />
            <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <div className={styles.languageSelector}>
            <span>EN</span>
            <svg className={styles.dropdownIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div className={styles.profileButton}>
            <span>U</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 