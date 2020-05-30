import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MovieDetailsComponent,
    NewMovieComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
    CommentDetailsComponent,
    UpdateCommentComponent,
    DeleteCommentComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'movie-details/:id', component: MovieDetailsComponent },
      { path: 'new-movie', component: NewMovieComponent },
      { path: 'update-movie/:id', component: UpdateMovieComponent },
      { path: 'delete-movie/:id', component: DeleteMovieComponent },
      { path: 'comment-details/:id', component: CommentDetailsComponent },
      { path: 'new-comment', component: NewCommentComponent },
      { path: 'update-comment/:id', component: UpdateCommentComponent },
      { path: 'delete-comment/:id', component: DeleteCommentComponent }
    ])
  ],
  entryComponents: [
    NewMovieComponent,
    UpdateMovieComponent,
    NewCommentComponent,
    UpdateCommentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
