import {apiService} from "./apiService"
import {urls} from "../constants"
import {IMovies} from "../interfaces";
import {IMovie} from "../interfaces";
import {IRes} from "../types";

const movieService = {
    getAll: ():IRes<IMovies> => apiService(urls.movies.base),
    getById: (id:number):IRes<IMovie> => apiService.get(urls.movies.byId(id)),
}

export {movieService}