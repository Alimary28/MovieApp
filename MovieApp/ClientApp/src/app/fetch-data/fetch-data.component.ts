import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

    public movies: MovieItem[];
      
    public comments: Comment[];
   

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {

    http.get<MovieItem[]>(baseUrl + 'api/MovieItems').subscribe(result => {
      this.movies = result
      console.log(this.movies);
    }, error => console.error(error));

    http.get<Comment[]>(baseUrl + 'api/Comments').subscribe(result => {
          this.comments = result
          console.log(this.comments);
    }, error => console.error(error));

    }
    onSelect(movie) {
        this.router.navigate(['/movie-details', movie.id]);
    }

    onClick(movie) {
      this.router.navigate(['/update-movie', movie.id]);
  }

    deleteMovie(movie) {
      this.router.navigate(['/delete-movie', movie.id]);
    }

    addMovie() {
      this.router.navigate(['/new-movie']);
    }

    onDetails(comment) {
      this.router.navigate(['/comment-details', comment.id]);
    }

    updateComment(comment) {
      this.router.navigate(['/update-comment', comment.id]);
    }

    onDelete(comment) {
      this.router.navigate(['/delete-comment', comment.id]);
    }

    addComment() {
      this.router.navigate(['/new-comment']);
    }

  filterMovies(startDate: Date, startTime: Time, endDate: Date, endTime: Time) {
    let startDateTime, endDateTime;
    if (startDate) {
      startDateTime = startDate;
      if (startTime) {
        startDateTime = `${startDateTime}T${startTime}`;
      }
    }
    if (endDate) {
      endDateTime = endDate;
      if (endTime) {
        endDateTime = `${endDateTime}T${endTime}`;
      }
    }
    this.http.get<MovieItem[]>('https://localhost:5001/api/movieItems/' + `${startDateTime}/${endDateTime}`).subscribe(result => {
      this.movies = result
      console.log(this.movies);
    }, error => console.error(error));
  }
}

enum Genre {
    comedy=1,
    adventure=2,
    animation=3,
    action=4,
    drama=5,
    thriller=6,
    horror=7,
    crime=8,
    fantasy=9
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
    numberOfComments: number;
}

interface Comment {
    id: number;
  text: string;
  important: boolean;
    movieItemId: number;
}
