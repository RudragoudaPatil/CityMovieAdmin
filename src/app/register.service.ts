import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private customerUrl= 'http://localhost:3001/api/customers';
  constructor(private http: HttpClient) { }

  addRemoteCustomer(customer):Observable<any>{
  	return this.http.post(this.customerUrl,customer);
 }
 getCustomerByEmail(){
  return this.http.get<[]>(this.customerUrl);
 }
}