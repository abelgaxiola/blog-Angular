import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogModule } from './blog/blog.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'blog', component: BlogComponent },
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      { path: '**', redirectTo: 'blog', pathMatch: 'full' }
    ]),
    BlogModule
  ],
  declarations: [
    AppComponent,
    BlogComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
