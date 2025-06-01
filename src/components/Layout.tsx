import React from 'react';
import Head from 'next/head';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Netflix - Premium Movie Streaming' 
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout; 