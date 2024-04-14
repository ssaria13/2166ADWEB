import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:5038/api/books'; // Adjust this URL to match your backend API URL

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any[]> {
    const url = `${this.apiUrl}/GetBooks`;
    return this.http.get<any[]>(url);
  }

  addBook(book: any): Observable<any> {
    const url = `${this.apiUrl}/AddBook`;
    return this.http.post(url, book);
  }

  updateBook(book: any): Observable<any> {
    const url = `${this.apiUrl}/UpdateBook/${book.id}`;
    return this.http.put(url, book);
  }

  deleteBook(id: string): Observable<any> {
    const url = `${this.apiUrl}/DeleteBook?id=${id}`;
    return this.http.delete(url);
  }
}
