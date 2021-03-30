import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ResponseMock, ApiResponse, Movie } from '../components/movies-list/movies-mock'

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    getMovies(): Promise<ApiResponse> {
        return new Promise(async (resolve, reject) => {
            try {
                this.http.get('https://swapi.dev/api/films/').subscribe((response: ApiResponse) => {
                    response.results.forEach((movie) => {
                        movie.roman = this.getRomanNumeral(movie.episode_id)
                        movie.poster = this.getMoviePoster(movie.episode_id)
                    })
                    this.setMovieStorage(response.results)
                    resolve(response)
                })
            } catch (error) {
                reject(error)
            }
        })
    }

    private getRomanNumeral(episodeId: number): string {
        if (episodeId == 1) {
            return 'I'
        }
        if (episodeId == 2) {
            return 'II'
        }
        if (episodeId == 3) {
            return 'III'
        }
        if (episodeId == 4) {
            return 'IV'
        }
        if (episodeId == 5) {
            return 'V'
        }
        if (episodeId == 6) {
            return 'VI'
        } else console.error('Invalid episode number detected! Check API response')
    }

    private getMoviePoster(episodeId: number) {
        if (episodeId == 1) {
            return '../../../assets/posters/1.jpg'
        }
        if (episodeId == 2) {
            return '../../../assets/posters/2.jpg'
        }
        if (episodeId == 3) {
            return '../../../assets/posters/3.jpg'
        }
        if (episodeId == 4) {
            return '../../../assets/posters/4.jpg'
        }
        if (episodeId == 5) {
            return '../../../assets/posters/5.jpg'
        }
        if (episodeId == 6) {
            return '../../../assets/posters/6.jpg'
        } else console.error('Invalid episode number detected! Check API response')
    }

    public getMovieSingle(episodeId: number): Movie {
        let movieDetails
        const movies = JSON.parse(localStorage.getItem('movies'))

        movies.forEach((movie) => {
            if (movie.episode_id === episodeId) movieDetails = movie
        })

        return movieDetails
    }

    private setMovieStorage(movies: Movie[]) {
        localStorage.setItem('movies', JSON.stringify(movies))
    }
}
