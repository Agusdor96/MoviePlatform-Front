import api from "./axios.config";
import { MoviesResponse } from "../types/MovieType";
 

export const getMovies = async (page: number = 1, limit: number = 10): Promise<MoviesResponse> => {
  const response = await api.get<MoviesResponse>('/movies', {
    params: { page, limit },
  });
  return response.data;
};
