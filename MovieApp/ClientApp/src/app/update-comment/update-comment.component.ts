import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent{

  public comment: Comment;
  public errorMessage = [];
  public id = parseInt(this.route.snapshot.paramMap.get('id'));
  form: FormGroup;
  httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {

    http.get<Comment>(baseUrl + 'api/Comments/' + this.id).subscribe(result => {
      this.comment = result
      console.log(this.comment);
    }, error => console.error(error));
    this.form = this.formBuilder.group({
      id: this.id,
      text: new FormControl(''),
      important: new FormControl(true),
      movieItemId: new FormControl('')
    });

  }
  updateComment() {
    this.http.put<Comment>('https://localhost:5001/api/Comments/' + this.id, this.form.value, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe(data => {
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
