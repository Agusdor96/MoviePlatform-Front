import { FaPlay } from 'react-icons/fa'; 
import React from 'react';
import { Movie } from '../../types/MovieType'; 
import styles from "./Moviecard.module.css"

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{movie.title}</h3>
      <div className={styles.imageWrapper}>
        <a href={movie.platformLink} target="_blank" rel="noopener noreferrer" className={styles.playIconWrapper}>
          <img src={movie.posterUrl} alt={`${movie.title} poster`} className={styles.image} />
          {movie.platformLink && <FaPlay className={styles.playIcon} />}
        </a>
      </div>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Protagonista:</strong> {movie.mainCharacter}</p>
      <p><strong>Año:</strong> {movie.year}</p>
      <p><strong>Género:</strong> {movie.genre}</p>
      {movie.imdbPosition && <p><strong>IMDB Posición:</strong> {movie.imdbPosition}</p>}
      {movie.awards && <p><strong>Premios:</strong> {movie.awards}</p>}
      <p><strong>Duración:</strong> {movie.duration}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
