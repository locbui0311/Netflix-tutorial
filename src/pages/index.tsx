import HeroSection from '@/src/components/HeroSection';
import Layout from '@/src/components/Layout';
import MovieSection from '@/src/components/MovieSection';
import React from 'react';


const trendingMovies = [
  {
    title: 'Dune',
    matchPercentage: 98,
    year: 2021,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/8c4a8kE7PizaGQQnditMmI1xbRp.jpg'
  },
  {
    title: 'Inception',
    matchPercentage: 95,
    year: 2010,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg'
  },
  {
    title: 'The Matrix',
    matchPercentage: 94,
    year: 1999,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
  },
  {
    title: 'Joker',
    matchPercentage: 92,
    year: 2019,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
  },
  {
    title: 'Parasite',
    matchPercentage: 97,
    year: 2019,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
  },
  {
    title: 'Avengers',
    matchPercentage: 96,
    year: 2019,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
  }
];
const popularMovies = [
  {
    title: 'Stranger Things',
    matchPercentage: 99,
    year: 2016,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg'
  },
  {
    title: 'Money Heist',
    matchPercentage: 93,
    year: 2017,
    posterUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg'
  },
  {
    title: 'The Crown',
    matchPercentage: 91,
    year: 2016,
    posterUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1DDE0Z2Y805rqfkEjPbZsMLyPwa.jpg'
  },
  {
    title: 'Breaking Bad',
    matchPercentage: 98,
    year: 2008,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'
  },
  {
    title: 'Dark',
    matchPercentage: 95,
    year: 2017,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg'
  },
  {
    title: 'The Witcher',
    matchPercentage: 92,
    year: 2019,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg'
  }
];
const continueWatching = [
  {
    title: 'Squid Game',
    matchPercentage: 99,
    episode: 'S1:E6',
    progress: 75,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg'
  },
  {
    title: "The Queen's Gambit",
    matchPercentage: 97,
    episode: 'S1:E4',
    progress: 50,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg'
  },
  {
    title: 'Ozark',
    matchPercentage: 96,
    episode: 'S2:E7',
    progress: 25,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg'
  },
  {
    title: 'The Crown',
    matchPercentage: 91,
    year: 2016,
    posterUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1DDE0Z2Y805rqfkEjPbZsMLyPwa.jpg'
  },
  {
    title: 'Breaking Bad',
    matchPercentage: 98,
    year: 2008,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'
  },
  {
    title: 'Dark',
    matchPercentage: 95,
    year: 2017,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg'
  },
  {
    title: 'The Witcher',
    matchPercentage: 92,
    year: 2019,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg'
  }
  
];
const topMovies = [
  {
    title: 'Squid Game',
    matchPercentage: 99,
    rank: 1,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg'
  },
  {
    title: 'Stranger Things',
    matchPercentage: 97,
    rank: 2,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg'
  },
  {
    title: 'Money Heist',
    matchPercentage: 95,
    rank: 3,
    posterUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg'
  },
  {
    title: 'The Witcher',
    matchPercentage: 94,
    rank: 4,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg'
  },
  {
    title: 'The Crown',
    matchPercentage: 91,
    rank: 5,
    year: 2016,
    posterUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1DDE0Z2Y805rqfkEjPbZsMLyPwa.jpg'
  },
  {
    title: 'Breaking Bad',
    matchPercentage: 98,
    rank: 6,
    year: 2008,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'
  },
  {
    title: 'Dark',
    matchPercentage: 95,
    rank: 7,
    year: 2017,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg'
  },
  {
    title: 'The Witcher',
    matchPercentage: 92,
    rank: 8,
    year: 2019,
    posterUrl: 'https://www.themoviedb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg'
  }
];


export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <main className="container mx-auto px-4 pb-20 -mt-32 relative z-10">
        <MovieSection title="Trending Now" movies={trendingMovies} />
        <MovieSection title="Popular on FilmFlix" movies={popularMovies} />
        <MovieSection title="Continue Watching" movies={continueWatching} />
        <MovieSection title="Top 10 in Your Country" movies={topMovies} />
      </main>
    </Layout>
  );
}
