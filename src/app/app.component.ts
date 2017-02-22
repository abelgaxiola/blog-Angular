import { Component } from '@angular/core';

@Component({
  selector: 'blog-app',
  templateUrl: './app/app.component.html'
})

export class AppComponent  { date = new Date().getFullYear(); }
