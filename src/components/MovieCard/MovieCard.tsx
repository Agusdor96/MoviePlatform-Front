import React from 'react';
import { Movie } from '../../types/MovieType'; 
import styles from "./Moviecard.module.css"

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <div className={styles.card}>
    <img src={movie.posterUrl} alt={`${movie.title} poster`} />
    <h3 className={styles.cardTitle}>{movie.title}</h3>
    <p><strong>Director:</strong> {movie.director}</p>
    <p><strong>Protagonista:</strong> {movie.mainCharacter}</p>
    <p><strong>Año:</strong> {movie.year}</p>
    <p><strong>Género:</strong> {movie.genre}</p>
    {movie.imdbPosition && <p><strong>IMDB Posición:</strong> {movie.imdbPosition}</p>}
    {movie.awards && <p><strong>Premios:</strong> {movie.awards}</p>}
    <p><strong>Duración:</strong> {movie.duration}</p>
    <p><strong>Rating:</strong> {movie.rating}</p>
    {movie.platformLink && (
      <a href={movie.platformLink} target="_blank" rel="noopener noreferrer">
        Ver en plataforma
      </a>
    )}
  </div>
);

export default MovieCard;
