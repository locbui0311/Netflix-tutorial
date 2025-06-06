import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const HeroSection: React.FC = () => {

  const router = useRouter();

  const handlePlayClick = () => {
    router.push('/watch');
  };
  return (
    <section className={styles.hero}>
      <div 
        className={styles.heroBackground}
        style={{
          backgroundImage: `url('https://www.themoviedb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg')`,
        }}
      />
      <div className={styles.heroContent}>
        <div className={styles.heroInfo}>
          <h1 className={styles.title}>Stranger Things</h1>
          <div className={styles.meta}>
            <span className={styles.match}>98% Match</span>
            <span className={styles.year}>2022</span>
            <span className={styles.rating}>TV-MA</span>
            <span className={styles.seasons}>4 Seasons</span>
          </div>
          <p className={styles.description}>
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
          </p>
          <div className={styles.actions}>
            <button className={styles.playButton} onClick={handlePlayClick}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Play
            </button>
            <button className={styles.moreInfoButton}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
};

export default HeroSection;