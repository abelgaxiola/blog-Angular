import { BlogService } from './blog.service';
import { Component, OnInit } from '@angular/core';

import { Blog } from './../blog/blog';


@Component({
  templateUrl: 'app/blog/blog.component.html'
})

export class BlogComponent implements OnInit {
  pageTitle = 'Blog';
  errorMessage: string;
  blogs: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs,
      error => this.errorMessage = <any>error);
  }

}
