import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customers } from '../core/types/types';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiUrl:string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Customers[]>{
    return this.httpClient.get<Customers[]>(`${this.apiUrl}/customers`)
  }

  saveDataNewCustomer(data: any){
    return this.httpClient.post(`${this.apiUrl}/customers`, data);
  }
}