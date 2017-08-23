import { Component, OnInit } from '@angular/core';
import { JsonDataService} from '../json-data.service';
import Utils from './../shared/Utils';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {

  showtime = [];
  movies = {};
  moviesUrl = './assets/data/movie_metadata.json';
  showtimeUrl = './assets/data/theater_showtimes.json';
  date = new Date();
  currTime = ( (this.date.getHours() * 60) + (this.date.getMinutes()) ) * 60;
  searchTime = null;

  resetSearch(event) {
    this.searchTime = null;
  }

  constructor(private dataService: JsonDataService) { }

  ngOnInit() {
    this.dataService.getMovies(this.moviesUrl).subscribe((data) => this.movies = Utils.reformatMovieData(data));
    this.dataService.getMovies(this.showtimeUrl).subscribe((data) => this.showtime = Utils.reformatShowtimeData(data));
  }

}
