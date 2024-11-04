export interface Movie {
    _id: string
    title: string;
    director: string;
    mainCharacter: string;
    year: number;
    genre: string;
    imdbPosition?: number;
    awards?: string;
    duration: string;
    rating: string;
    posterUrl: string;
    platformLink?: string;
  }

  export interface MoviesResponse {
    movies: Movie[];
    totalMovies: number; // Define la estructura esperada
  }
  
  