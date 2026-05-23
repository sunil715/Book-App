import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyBook } from './my-book/my-book';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyBook],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Book-App');
}
