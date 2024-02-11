import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/appState/appState';
import { PostState } from '../state/post.state';
import { Post } from '../model/post.model';
import { getPosts } from '../state/post.selectors';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor(private store: Store<AppState>) {

  }

  posts!: Observable<Post[]> 
  ngOnInit(): void {
    this.posts=this.store.select(getPosts)
    
  }

}
