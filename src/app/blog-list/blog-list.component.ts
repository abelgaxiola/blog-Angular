import { Component, OnInit } from '@angular/core';

import { Blog } from './../blog/blog';
import { BlogService } from './../blog/blog.service';

@Component({
  templateUrl: 'app/blog-list/blog-list.component.html'
})

export class BlogListComponent implements OnInit {
  pageTitle = 'Blog List';
  errorMessage: string;
  blogs: Blog[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs,
      error => this.errorMessage = <any>error);
  }
}
