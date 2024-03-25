import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newsItems = [
    'News item 1',
    'News item 2',
    'This is a longer news item that will scroll horizontally.',
    'More news!'
  ];
}
