import { Movie } from "../../types/MovieType";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./CardContainer.module.css"

interface CardContainerProps {
    movies: Movie[];
  }

const CardContainer: React.FC<CardContainerProps> = ({ movies }) =>{
    return (
        <div className={styles.container}>
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      );
    }
export default CardContainer