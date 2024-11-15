import api from "./axios.config";
import { MoviesResponse } from "../types/MovieType";
import { Filters } from "../types/FilterTypes";
 

export const getMovies = async (page: number = 1, limit: number = 20): Promise<MoviesResponse> => {
  const response = await api.get<MoviesResponse>('/movies', {
    params: { page, limit },
  });
  return response.data;
};

export const getFilteredMovies = async (page: number, limit: number, filters: Filters): Promise<MoviesResponse> => {
  const response = await api.get<MoviesResponse>('/movies/filteredMovies', {
    params: { page, limit, ...filters },
  });
  return response.data;
};
