import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {ShowtimeComponent} from './showtime/showtime.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: 'movies', component: MoviesComponent},
  { path: 'showtime', component: ShowtimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
