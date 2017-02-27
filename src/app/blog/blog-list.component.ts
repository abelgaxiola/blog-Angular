import { Component, OnInit } from '@angular/core';

import { Blog } from './blog';
import { BlogService } from './blog.service';

@Component({
  templateUrl: 'app/blog/blog-list.component.html'
})

export class BlogListComponent implements OnInit {
  pageTitle = 'Blogs List';
  imageWidth: number = 50;
  imageMargin: number = 2;
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
