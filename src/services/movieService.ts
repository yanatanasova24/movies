import {apiService} from "./apiService"
import {urls} from "../constants"
import {IMovies} from "../interfaces";
import {IMovie} from "../interfaces";
import {IRes} from "../types";
import {IGenres} from "../interfaces/genresInterface";

const movieService = {
    getAll: (page= '1'):IRes<IMovies> => apiService(urls.movies.base, {params:{page}}),
    getById: (id:number):IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getGenreById: (id:number):IRes<string> => apiService.get(urls.genres.byId(id)),
    getMoviesByGenreId: (id:number, page= '1'):IRes<IMovies> => apiService.get(urls.genres.moviesByGenreId(id), {params:{page}}),
    getGenres:():IRes<IGenres> => apiService.get(urls.genres.all)
}

export {movieService}