import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Customer } from '../models/Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customer/';

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) { }

  public getAll(search: string): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}list/?search=${search}`);
  }

  public getById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}${id}/`)
  }

  public login(user: string, pass: string): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/login?username=${user}&password=${pass}/`)
  }

  public create(data: Customer): Observable<Customer>{
    return this.http.post<Customer>(`${this.baseUrl}create/`,data)
  }

  public update(data:Customer, id:number): Observable<Customer>{
    return this.http.put<Customer>(`${this.baseUrl}update/${id}/`,data)
  }

  public delete(id:number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}delete/${id}/`)
  }
}
