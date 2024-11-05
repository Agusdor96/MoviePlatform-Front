import api from "./axios.config";
import { MoviesResponse } from "../types/MovieType";
import { Filters } from "../types/FilterTypes";
 

export const getMovies = async (page: number = 1, limit: number = 20): Promise<MoviesResponse> => {
  const response = await api.get<MoviesResponse>('/movies', {
    params: { page, limit },
  });
  return response.data;
};

export const getFilteredMovies = async (filters: Filters, page: number = 1, limit: number = 20): Promise<MoviesResponse> => {
  const response = await api.get<MoviesResponse>('/movies/filteredMovies', {
    params: { ...filters, page, limit },
  });
  return response.data;
};
