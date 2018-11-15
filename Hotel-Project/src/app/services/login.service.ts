import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(input: any) {
    const url = '';
    return this.http.post(url, input);
  }

  staffLogin(input: any) {
    const url = '';
    return this.http.post(url, input);
  }

  constructor(private http: HttpClient) { }
}
