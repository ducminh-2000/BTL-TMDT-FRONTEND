import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { BookItem } from '../models/BookItem';


@Injectable({
  providedIn: 'root'
})
export class BookItemService {

  private baseUrl = 'http://localhost:8080/api/bookItem/';

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) { }

  public getAll(search: string): Observable<BookItem[]>{
    return this.http.get<BookItem[]>(`${this.baseUrl}list/?search=${search}`);
  }

  public getById(id: number): Observable<BookItem>{
    return this.http.get<BookItem>(`${this.baseUrl}${id}/`)
  }

  public login(user: string, pass: string): Observable<BookItem>{
    return this.http.get<BookItem>(`${this.baseUrl}/login?username=${user}&password=${pass}/`)
  }

  public create(data: BookItem): Observable<BookItem>{
    return this.http.post<BookItem>(`${this.baseUrl}create/`,data)
  }

  public update(data:BookItem, id:number): Observable<BookItem>{
    return this.http.put<BookItem>(`${this.baseUrl}update/${id}/`,data)
  }

  public delete(id:number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}delete/${id}/`)
  }
}
