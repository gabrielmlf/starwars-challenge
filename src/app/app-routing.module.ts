import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MovieSingleComponent } from './components/movie-single/movie-single.component'
import { MoviesListComponent } from './components/movies-list/movies-list.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
    { path: 'movies', component: MoviesListComponent },
    { path: 'movie/:id', component: MovieSingleComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
