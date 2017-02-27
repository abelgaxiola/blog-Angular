import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { BlogListComponent } from './../blog-list/blog-list.component';
import { BlogDetailComponent } from './../blog-detail/blog-detail.component';
import { BlogService } from './blog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'blogs', component: BlogListComponent },
      { path: 'blog/:id', component: BlogDetailComponent}
    ])
  ],
  declarations: [
    BlogListComponent,
    BlogDetailComponent
  ],
  providers: [
    BlogService
  ]
})

export class BlogModule {}
