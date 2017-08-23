import { Component, OnInit } from '@angular/core';
import { JsonDataService} from '../json-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  //
  movies = [];
  moviesUrl = './assets/data/movie_metadata.json';
  searchTerm = null;
  searchRating = null;
  ratings = [
    {'rating': 'G', 'description' : 'General Audiences'},
    {'rating': 'PG', 'description' : 'Parental Guidance Suggested'},
    {'rating': 'PG-13', 'description' : 'Parents Strongly Cautioned'},
    {'rating': 'R', 'description' : 'Restricted'},
    {'rating': 'NC-17', 'description' : 'Adults Only'},
    {'rating': 'NR', 'description' : 'Not Yet Rated'},
  ];

  resetSearch(event) {
    this.searchTerm = null;
    this.searchRating = null;
  }
  //
  constructor(private dataService: JsonDataService) { }
  //
  ngOnInit() {
    this.dataService.getMovies(this.moviesUrl).subscribe((data) =>  this.movies = data);
  }
}
