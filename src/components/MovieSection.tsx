import React, { useRef, useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { MovieSectionProps } from '../types/movie';
import styles from '../styles/MovieSection.module.css';

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef<NodeJS.Timeout>();

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const startAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
    
    autoScrollInterval.current = setInterval(() => {
      if (sliderRef.current) {
        scroll('right');
      }
    }, 3000); // Scroll every 3 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isAutoScrolling]);

  const handleButtonClick = (direction: 'left' | 'right') => {
    stopAutoScroll();
    scroll(direction);
    // Resume auto scroll after 5 seconds
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.sliderContainer}>
        <button 
          className={`${styles.sliderButton} ${styles.prevButton}`}
          onClick={() => handleButtonClick('left')}
          disabled={!canScrollLeft}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div 
          ref={sliderRef}
          className={`${styles.slider} ${isAutoScrolling ? styles.autoScroll : ''}`}
          onScroll={checkScroll}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>

        <button 
          className={`${styles.sliderButton} ${styles.nextButton}`}
          onClick={() => handleButtonClick('right')}
          disabled={!canScrollRight}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default MovieSection; 