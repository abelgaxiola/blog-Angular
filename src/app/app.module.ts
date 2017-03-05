import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogService } from './blog/blog.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'blog', component: BlogComponent },
      { path: 'blogs', component: BlogListComponent },
      { path: 'blog/:id', component: BlogDetailComponent },
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      { path: '**', redirectTo: 'blog', pathMatch: 'full' }
    ]),
    RouterModule.forChild([
      { path: 'blogs', component: BlogListComponent },
      { path: 'blog/:id', component: BlogDetailComponent }
    ])
  ],
  declarations: [
    AppComponent,
    BlogComponent,
    BlogListComponent,
    BlogDetailComponent,
    FooterComponent
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})

export class AppModule { }
