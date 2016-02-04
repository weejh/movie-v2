import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

// ES 2015 Style
// function PopularMovies (http) {
//   http.configure(config => {
//     config
//       .useStandardConfiguration()
//       .withBaseUrl('http://api.themoviedb.org/3/movie/now_playing?api_key=8138f629c34a57fd17ae183b7eb41931');
//   });
//
//   this.http = http;
//
//   this.heading = 'Popular Movies';
//   this.popularMovies = [];
//   this.videoPath = ''
// }
//
// PopularMovies.prototype.activate = function () {
//   return this.http.fetch('')
//     .then(response => response.json())
//     .then(listofMovies => this.popularMovies = listofMovies.results)
// }
//
// var foo = new PopularMovies()

@inject(HttpClient)
export class PopularMovies {
  heading = 'Popular Movies';
  popularMovies = [];
  videoPath = ''

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.themoviedb.org/3/movie/now_playing?api_key=8138f629c34a57fd17ae183b7eb41931');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('')
      .then(response => response.json())
      .then(listofMovies => this.popularMovies = listofMovies.results)
  }


  playMovie(id) {
    console.log(id)
    var videoString = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8138f629c34a57fd17ae183b7eb41931`
    console.log(videoString)

    let httpClient = new HttpClient();
    return httpClient.fetch(videoString)
      .then(response => response.json())
      .then(({ results: [{ key }] }) => {
        console.log(key)
        this.videoPath = `https://www.youtube.com/watch?v=${key}`
        console.log(this.videoPath)
        window.open(this.videoPath)
      })

      // .then(details => {
      //   var videoType = details.results[0]
      //   console.log('yeah!', videoType)
      //   this.videoPath = videoType.key
      // })

      // .then(details => details.results)
      // .then(results => results[0])
      // .then(videoType => this.videoPath = videoType.key)
  }
}
