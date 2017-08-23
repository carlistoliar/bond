import { Pipe, PipeTransform } from '@angular/core';
import {isNull, isUndefined} from 'util';

@Pipe({
  name: 'searchByMovieName'
})
export class SearchByMovieNamePipe implements PipeTransform {

  transform(movies: any, searchTerm: any): any {
    if (isUndefined(searchTerm) || isNull(searchTerm) || searchTerm === '') {
      return movies;
    }else {
      return movies.filter(function (x) {
        return x.title.toLocaleLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }
}
