import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent{
  public movie: MovieItem;
  id = this.route.snapshot.paramMap.get('id');


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute, private router: Router) {
    http.get<MovieItem>(baseUrl + 'api/MovieItems/' + this.id).subscribe(result => {
      this.movie = result
      console.log(this.movie);
    }, error => console.error(error));
  }
  deleteMovie() {
    this.http.delete<MovieItem>('https://localhost:5001/api/movieItems' + '/' + this.id).subscribe(result => {
      console.log(result);
      this.router.navigate(['/fetch-data']);
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
