import React, { createContext, useState, useContext} from 'react';
import { Movie } from '../types/MovieType';

interface MoviesContextProps {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export const MoviesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // Este valor será compartido entre todos los componentes que usen el contexto
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

// Hook personalizado para usar el contexto de películas
export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies debe ser usado dentro de MoviesProvider");
  }
  return context;
};
