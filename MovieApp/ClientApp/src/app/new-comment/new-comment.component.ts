import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent {

  public comment: Comment;
  public errorMessage = [];
  form: FormGroup;


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      text: new FormControl(''),
      important: new FormControl(true),
      movieItemId: new FormControl('')
    });

  }
  saveComment() {
    this.http.post<Comment>('https://localhost:5001/api/Comments', this.form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/fetch-data']);
    },
      err => this.errorMessage = err.error.errors);

  }

}
interface Comment {
  id: number;
  text: string;
  important: boolean;
  movieItemId: number;
}
