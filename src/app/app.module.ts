import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonDataService } from './json-data.service';
import { SecondsToTimePipe } from './shared/seconds-to-time.pipe';
import { SearchByMovieShowtimePipe } from './shared/search-by-movie-showtime.pipe';
import { SearchByMovieRatingPipe } from './shared/search-by-movie-rating.pipe';
import { SearchByMovieNamePipe } from './shared/search-by-movie-name.pipe';
import { MoviesComponent } from './movies/movies.component';
import { ShowtimeComponent } from './showtime/showtime.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondsToTimePipe,
    SearchByMovieShowtimePipe,
    SearchByMovieRatingPipe,
    SearchByMovieNamePipe,
    MoviesComponent,
    ShowtimeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [JsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
