import api from "./axios.config";
import { Movie } from "../types/MovieType";

export const getMovies = async (): Promise<Movie[]> => {
  const response = await api.get<Movie[]>('/movies');
  return response.data;
};




// export const addMovieToWatchList = async (movieId: string) => {
//   try {
//     const response = await fetch(`${API_URL}/watchlist`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ movieId }),
//     });
//     if (!response.ok) throw new Error("Error adding movie to watchlist");
//     return await response.json();
//   } catch (error) {
//     console.error("addMovieToWatchList error:", error);
//     throw error;
//   }
// };

// Más funciones según se necesiten para otros endpoints
