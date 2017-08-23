import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime'
})
export class SecondsToTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let amPm = 'am';
    let hours = Math.floor(value / 3600);
    const minutes = Math.floor((value - (hours * 3600)) / 60);
    if (hours > 12) {
      amPm = 'pm';
      hours -= 12;
    }
    return String(hours) + ':' + String(minutes) + ' ' + amPm;
  }

}
