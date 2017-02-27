import { Component } from '@angular/core';

@Component({
  selector: 'blog-app',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent {
  pageTitle = 'Thoughts Expressed';
}
