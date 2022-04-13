import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Author } from '../models/Author';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl = 'http://localhost:8080/api/author/';

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) { }

  public getAll(search: string): Observable<Author[]>{
    return this.http.get<Author[]>(`${this.baseUrl}list/?search=${search}`);
  }

  public getById(id: number): Observable<Author>{
    return this.http.get<Author>(`${this.baseUrl}${id}/`)
  }

  public create(data: Author): Observable<Author>{
    return this.http.post<Author>(`${this.baseUrl}create/`,data)
  }

  public update(data:Author, id:number): Observable<Author>{
    return this.http.put<Author>(`${this.baseUrl}update/${id}/`,data)
  }

  public delete(id:number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}delete/${id}/`)
  }
}
