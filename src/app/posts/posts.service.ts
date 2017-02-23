import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Post } from './post';

@Injectable()
export class PostsService {
  private postsUrl = './app/posts/posts.json';

  constructor(private http: Http) { }

  getAnimals(): Observable<Post[]> {
    return this.http.get(this.postsUrl)
      .map((response: Response) => <Post[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

    getAnimal(id: number): Observable<Post> {
        return this.getAnimals()
            .map((posts: Post[]) => posts.find(p => p.Id === id));
    }

  private handleError(error: Response) {
    // ToDo: Log somewhere else (text-file or database)
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
