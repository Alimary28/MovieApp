import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

    public movies: MovieItem[];

    public comments: Comment[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));

    http.get<MovieItem[]>(baseUrl + 'api/MovieItems').subscribe(result => {
      this.movies = result
      console.log(this.movies);
    }, error => console.error(error));

      http.get<Comment[]>(baseUrl + 'api/Comments').subscribe(result => {
          this.comments = result
          console.log(this.comments);
      }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface MovieItem {
    id: number;
    title: string;
    description: string;
    genre: string;
    duration: number;
    releaseYear: number;
    director: string;
    addedDate: string;
    rating: number;
    watched: string;
    numberOfComments: number;
}

interface Comment {
    id: number;
    text: string;
    important: number;
    movieItemId: number;
}
