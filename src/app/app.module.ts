import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MoviesListComponent } from './components/movies-list/movies-list.component'
import { MovieSingleComponent } from './components/movie-single/movie-single.component';
import { NotFoundComponent } from './components/not-found/not-found.component'

@NgModule({
    declarations: [AppComponent, MoviesListComponent, MovieSingleComponent, NotFoundComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
