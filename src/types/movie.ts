export interface Movie {
  title: string;
  matchPercentage: number;
  year?: number;
  episode?: string;
  rank?: number;
  progress?: number;
  posterUrl?: string; // ✅ Thêm dòng này
}


export interface MovieSectionProps {
  title: string;
  movies: Movie[];
  
} 