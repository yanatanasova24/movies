const baseURL = 'https://api.themoviedb.org/3';

const movies = '/movie/popular';
const genres = '/genre/movie/list'

const urls = {
    movies:{
        base:movies,
        byId:(id:number):string =>`discover/movie/${id}`
    }
}

export {
    baseURL,
    urls
}