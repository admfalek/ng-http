import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    myPosts;
    //allPosts$: Observable<Array<Post>>;

    constructor(private httpService: HttpService) {  }

    getPosts() {
        // for async displaying data
        //this.allPosts$ = this.httpService.posts$;
    
        this.httpService.getPosts().subscribe(posts => {
            this.myPosts = posts;
            console.log(posts);
        });
    }

    getPost() {
        this.httpService.getPost(1).retry(3).subscribe(post => {
            console.log(post);
        }, (error: HttpErrorResponse) => {
            console.log(error);
        });
    }

    getPostByUser() {
        this.httpService.getPostByUser(1).subscribe(posts => {
            console.log(posts);
        });
    }

    addPost() {
        const p: Post = ({
            userId: 1,
            id: null,
            title: 'Mój post',
            body: 'Pierwszy post o angularze',
        });

        this.httpService.addPost(p).subscribe(post => {
            console.log(post);
        });
    }

    updatePost() {
        const p: Post = ({
            userId: 1,
            id: 1,
            title: 'UpdatePost - title post',
            body: 'UserPost - test post',
        });

        this.httpService.updatePost(p).subscribe(post => {
            console.log(p);
        });
    }

    deletePost() {
        this.httpService.deletePost(1).subscribe(post => {
            console.log(post);
        });
    }

    changePost() {
        const p: Post = ({
            id: 1,
            body: 'zmieniam tylko wpis',
        });

        this.httpService.changePost(p).subscribe(post => {
            console.log(post);
        });
    }
}

export interface Post {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
}
