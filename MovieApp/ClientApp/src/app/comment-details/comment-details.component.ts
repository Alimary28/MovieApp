import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent{

  public comment: Comment;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    http.get<Comment>(baseUrl + 'api/Comments/' + id).subscribe(result => {
      this.comment = result
      console.log(this.comment);
    }, error => console.error(error));
  }

}
interface Comment {
  id: number;
  text: string;
  important: boolean;
  movieItemId: number;
}
