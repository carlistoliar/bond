import { Pipe, PipeTransform } from '@angular/core';
import {isNull, isUndefined} from 'util';

@Pipe({
  name: 'searchByMovieRating'
})
export class SearchByMovieRatingPipe implements PipeTransform {

  transform(movies: any, searchRating: any): any {
    if (isUndefined(searchRating) || isNull(searchRating) || searchRating === '') {
      return movies;
    }else {
      return movies.filter(function (x) {
        return x.rating.toLocaleLowerCase().includes(searchRating.toLowerCase());
      });
    }
  }
}
