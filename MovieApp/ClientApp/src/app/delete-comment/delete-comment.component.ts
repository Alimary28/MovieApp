import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent {

  public comment: Comment;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute, private router: Router) {
    http.get<Comment>(baseUrl + 'api/Comments/' + this.id).subscribe(result => {
      this.comment = result
      console.log(this.comment);
    }, error => console.error(error));
  }
  deleteComment() {
    this.http.delete<Comment>('https://localhost:5001/api/Comments' + '/' + this.id).subscribe(result => {
      console.log(result);
      this.router.navigate(['/fetch-data']);
    }, error => console.error(error));
  }



}
interface Comment {
  id: number;
  text: string;
  important: boolean;
  movieItemId: number;
}
