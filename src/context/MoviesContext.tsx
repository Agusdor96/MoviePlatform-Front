import React, { createContext, useState, useContext} from 'react';
import { Movie } from '../types/MovieType';

interface MoviesContextProps {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number; 
  setTotalPages:  React.Dispatch<React.SetStateAction<number>>;
}

const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export const MoviesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);


  // Este valor será compartido entre todos los componentes que usen el contexto
  return (
    <MoviesContext.Provider value={{ movies, setMovies, currentPage, setCurrentPage, totalPages, setTotalPages }}>
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
