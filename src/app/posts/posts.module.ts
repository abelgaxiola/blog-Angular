import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  ],
  providers: [
    PostsService
  ]
})

export class PostsModule { }
