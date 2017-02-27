import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Blog } from './blog';
import { BlogService } from './blog.service';

@Component({
    templateUrl: 'app/blog/blog-detail.component.html'
})

export class BlogDetailComponent implements OnInit {
    blog: Blog;
    errorMessage: string;
    private sub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private blogService: BlogService
    ) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getBlog(id);
            });
    }

    getBlog(id: number) {
        this.blogService.getBlog(id).subscribe(
            blog => this.blog = blog,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/blog']);
    }
}
