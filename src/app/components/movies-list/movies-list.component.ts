import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MoviesService } from 'src/app/services/movies.service'
import { Movie } from './movies-mock'

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
    movies: Movie[] = []

    constructor(private moviesService: MoviesService, private router: Router) {}

    async ngOnInit() {
        await this.getMoviesList()
    }

    async getMoviesList() {
        const response = await this.moviesService.getMovies()
        this.movies = response.results
    }

    async openMovieDetails(movie: Movie) {
        this.router.navigate(['/movie', movie.episode_id])
    }
}
