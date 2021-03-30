import { Component, OnInit } from '@angular/core'
import * as moment from 'moment'
import { MoviesService } from 'src/app/services/movies.service'
import { Movie } from '../movies-list/movies-mock'

@Component({
    selector: 'app-movie-single',
    templateUrl: './movie-single.component.html',
    styleUrls: ['./movie-single.component.css']
})
export class MovieSingleComponent implements OnInit {
    movie: Movie
    formatedDate: string
    isEpisodeInvalid: boolean = false

    constructor(private movieService: MoviesService) {
        const url = window.location.href.split('/')
        const episodeId = parseInt(url[url.length - 1]) //cant use angular router here cause module is lazy loaded. see: https://github.com/angular/angular/issues/19420

        if (episodeId > 6 || episodeId < 1) this.isEpisodeInvalid = true
        else this.movie = this.movieService.getMovieSingle(episodeId)
    }

    async ngOnInit(): Promise<void> {
        if (!this.isEpisodeInvalid) this.getFormatedDate()
    }

    getFormatedDate() {
        this.formatedDate = moment(this.movie.release_date).format('DD MMM, YYYY')
    }
}
