import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-book',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-book.html',
  styleUrl: './my-book.css',
})
export class MyBook {

   bookName: string = '';

  books: string[] = [
    'Atomic Habits',
    'Rich Dad Poor Dad',
    'The Alchemist'
  ];

  addBook() {
    if (this.bookName.trim() !== '') {
      this.books.push(this.bookName);
      this.bookName = '';
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
  }
}
