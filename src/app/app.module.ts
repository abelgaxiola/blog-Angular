import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'posts', component: PostsComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: '**', redirectTo: 'posts', pathMatch: 'full' }
    ]),
    PostsModule
  ],
  declarations: [
    AppComponent,
    PostsComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
