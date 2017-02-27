import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { BlogListComponent } from './blog-list.component';
import { BlogDetailComponent } from './blog-detail.component';

import { BlogService } from './blog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'blog', component: BlogListComponent },
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
