import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { Observable } from 'rxjs/Observable';
import { HttpParams, HttpClient, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {
        this.getPosts();
    }

    /* Pobieramy wszystkie posty */

    // getPosts(): Observable<Array<Post>> {
    //     return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
    // }

    getPosts(): Observable<Array<Post>> {
        return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts',
        // ponizej pelny obiekt odpowiedzi serwera
        // {observe: 'response'});
        {observe: 'body'});

        // Obsługa błędu przy async pipe
        // return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').subscribe(
        //     posts => {
        //         this.postsObs.next(posts);
        //     },
        //     err => {
        //         console.log(err);
        //     }
        // );
    }

    /* Pobieramy jeden post podajac id */
    getPost(id: number): Observable<Post> {
        return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/errr' + id);
    }

    /* Pobieramy wszystkie posty usera podając userID */
    getPostByUser(userId: number): Observable<Array<Post>> {
        const userParam = new HttpParams().set('userId', userId + '');
        return this.http.get<Array<Post>>(
            'https://jsonplaceholder.typicode.com/posts',
            {params: userParam}
        );
    }

    /* Dodajemy nowy post */
    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
    }

    /* Pobieramy wszystkie posty */
    updatePost(post: Post): Observable<Post> {
        return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
    }

    /* Usuwamy konkretny post */
    deletePost(id: number): Observable<Post> {
        return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
    }

    /* Zmieniamy pojedynczy post */
    changePost(post: Post): Observable<Post> {
        return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
    }

}