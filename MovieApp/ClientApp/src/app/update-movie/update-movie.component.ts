import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent {

  public movie: MovieItem;
  public errorMessage = [];
  public id = parseInt(this.route.snapshot.paramMap.get('id'));
  public genre = ['comedy', 'adventure', 'animation', 'action', ' drama', 'thriller', '  horror', 'crime', 'fantasy'];
  public watched = ['yes', 'no'];
  public titleOperations = 'create';
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    genre: new FormControl(''),
    duration: new FormControl(''),
    releaseYear: new FormControl(''),
    director: new FormControl(''),
    addedDate: new FormControl(''),
    rating: new FormControl(''),
    watched: new FormControl('')
  });
  httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    //const id = parseInt(this.route.snapshot.paramMap.get('id'));
    http.get<MovieItem>(baseUrl + 'api/MovieItems/' + this.id).subscribe(result => {
      this.movie = result
      this.form = this.formBuilder.group({
          id: this.id,
          title: new FormControl(this.movie.title),
          description: new FormControl(this.movie.description),
          genre: new FormControl(this.movie.genre),
          duration: new FormControl(this.movie.duration),
          releaseYear: new FormControl(this.movie.releaseYear),
          director: new FormControl(this.movie.director),
          addedDate: new FormControl(this.movie.addedDate),
          rating: new FormControl(this.movie.rating),
          watched: new FormControl(this.movie.watched)
      });
      console.log(this.movie);
    }, error => console.error(error));


  }
  onSubmit() {
    
    this.http.put<MovieItem>('https://localhost:5001/api/movieItems' + '/' + this.id, this.form.value, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe(data => {
      console.log(data);
      this.router.navigate(['/fetch-data']);
    },
      err => this.errorMessage = err.error.errors);

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
class MovieItem {
  id: number;
  title: string;
  description: string;
  genre: Genre;
  duration: number;
  releaseYear: number;
  director: string;
  addedDate: string;
  rating: number;
  watched: string;
  comments: [];
}
