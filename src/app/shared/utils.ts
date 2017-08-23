export default class Utils {

  /*
  * WHAT IT DOES
  * takes the array received from API and returns and Object.
  * each element key is the Movie ID.
  *
  * WHY
  * as an object this can be used in the Theater layout to
  * merge this data with the showtime data and get the name, rating and poster file.
  * */

  static reformatMovieData(data) {
    const refData = {};
    for (let i = 0; i < data.length; i++ ) {
      refData[data[i].id] = {'poster' : data[i].poster, 'rating' : data[i].rating, 'title' : data[i].title};
    }
    return refData;
  }

  /*
  * WHAT IT DOES
  * takes the array received from API and returns it modified.
  * 1. showtimes which at the moment is an object need to be an array
  * the id which is a key now becomes a value of key movieID
  * the value of id becomes the value f a new key named shotimes.
  * 2. each showtime value is converted from hours and minutes to seconds.
  *
  * WHY
  * 1. showtimes as an object can't be parsed with ngFor.
  * 2. time as seconds is easier to compare to current day seconds since midnight
  * and easier to sort.  The custom pipe secondsToTime converts back to the proper format
  * when displayed.
  * */

  static reformatTheaterData(data) {
    const  refData = [];
    let showTimes = [];
    for (let i = 0; i < data.length; i++) {
      showTimes = Object.keys(data[i].showtimes);
      const tempShowTimes = [];
      for (let ii = 0; ii < showTimes.length; ii++ ) {
        tempShowTimes.push({'movieID' : showTimes[ii], 'showtimes' : this.timeArrayToSecondsArray(data[i].showtimes[showTimes[ii]])});
      }
      refData.push(
        {'id' : data[i].id, 'name' : data[i].name, 'movies' : tempShowTimes}
      );
    }
    return refData;
  }

  static timeArrayToSecondsArray(times) {
    const result = [];
    let militaryAdjust = 0;
    times.map(function (time) {
      const tempArray = time.split(' ');
      if (tempArray[1].toLocaleLowerCase() === 'pm') {
        militaryAdjust = 12;
      }
      const hourMinuteArray = tempArray[0].split(':');
      const seconds = (((Number(hourMinuteArray[0]) + militaryAdjust) * 60) + (Number(hourMinuteArray[1]))) * 60;
      result.push(seconds);
    });
    const sorted = result.sort(function(a, b) {
      return a - b;
    });
    return sorted;
  }
}
