import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class JsonDataService {

  constructor(private http: Http) {}

  getMovies(url) {
    return this.http.get(url).map((response: Response) => {
      const data = response.json();
      return data;
    });
  }
}
