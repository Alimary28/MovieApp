import { Component, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  
  public movie: MovieItem;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    http.get<MovieItem>(baseUrl + 'api/MovieItems/' + id).subscribe(result => {
      this.movie = result
      console.log(this.movie);
    }, error => console.error(error));
  }

}
enum Genre {
  comedy = 1,
  adventure = 2,
  animation = 3,
  action = 4,
  drama = 5,
  thriller = 6,
  horror = 7,
  crime = 8,
  fantasy = 9
}
interface MovieItem {
  id: number;
  title: string;
  description: string;
  genre: Genre;
  duration: number;
  releaseYear: number;
  director: string;
  addedDate: Date;
  rating: number;
  watched: string;
  comments: [];
}
