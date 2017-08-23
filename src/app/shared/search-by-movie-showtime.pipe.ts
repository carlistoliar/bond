import { Pipe, PipeTransform } from '@angular/core';
import {isNull, isUndefined} from 'util';

@Pipe({
  name: 'searchByMovieShowtime'
})
export class SearchByMovieShowtimePipe implements PipeTransform {

  transform(theaters: any, searchTime: any): any {
    // console.log(theaters);
    if (isUndefined(searchTime) || isNull(searchTime) || searchTime === '') {
      return theaters;
    }else {
      const time = this.timeArrayToSecondsArray(searchTime);
      const theatersResult = [];
      for (let i = 0; i < theaters.length; i++) {
        const tempShowtimes = [];
        for (let st = 0; st < theaters[i].showtimes.length; st++) {
          if (theaters[i].showtimes[st] >= time) {
            tempShowtimes.push(theaters[i].showtimes[st]);
          }
        }
        if (tempShowtimes.length > 0) {
          theatersResult.push({'movieID' : theaters[i].movieID, 'showtimes': tempShowtimes});
        }
      }
      return theatersResult;

    }
  }

  timeArrayToSecondsArray(time) {
    const result = null;
    let militaryAdjust = 0;
    const tempArray = time.split(' ');
    const hourMinuteArray = tempArray[0].split(':');
    if (isNull(hourMinuteArray[1]) || isUndefined(hourMinuteArray[1])) {
      hourMinuteArray.push(0);
    }
    if (tempArray[1] === 'pm' || tempArray[1] === 'Pm' || tempArray[1] === 'PM' || tempArray[1] === 'pM' || hourMinuteArray[0] >= 12) {
      militaryAdjust = 12;
    }
    return (((Number(hourMinuteArray[0]) + militaryAdjust) * 60) + (Number(hourMinuteArray[1]))) * 60;
  }
}
