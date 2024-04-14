import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Books App';
  books: any[] = [];
  newBook = { title: '', description: '', price: null };
  editingBook: any = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.loadBooks();
      this.newBook = { title: '', description: '', price: null }; // Reset form fields after adding book
    }, error => {
      console.error('Error adding book:', error);
    });
  }

  editBook(book: any): void {
    this.editingBook = { ...book }; // Create a copy of the book object for editing
  }

  saveEdit(): void {
    if (this.editingBook) {
      this.bookService.updateBook(this.editingBook).subscribe(() => {
        this.loadBooks();
        this.editingBook = null; // Reset editing state after saving
      }, error => {
        console.error('Error saving book edit:', error);
      });
    }
  }

  cancelEdit(): void {
    this.editingBook = null; // Reset editing state without saving
  }

  deleteBook(book: any): void {
    this.bookService.deleteBook(book.id).subscribe(() => {
      this.loadBooks();
    }, error => {
      console.error('Error deleting book:', error);
    });
  }
}
