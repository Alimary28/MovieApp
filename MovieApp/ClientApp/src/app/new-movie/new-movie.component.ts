import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent {

  public movie: MovieItem;

  public genre = ['comedy', 'adventure', 'animation', 'action', ' drama', 'thriller', '  horror', 'crime', 'fantasy'];
  public watched = ['yes', 'no'];

  form: FormGroup;


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      id: 0,
      title: new FormControl(''),
      description: new FormControl(''),
      genre: new FormControl('action'),
      duration: new FormControl(''),
      releaseYear: new FormControl(''),
      director: new FormControl(''),
      addedDate: new FormControl(''),
      rating: new FormControl(''),
      watched: new FormControl('yes')
    });
    
  }
  onSubmit() {

    this.http.post<MovieItem>('https://localhost:5001/api/movieItems', this.form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/fetch-data']);
    });   
  
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
}
