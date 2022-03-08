import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = `https://reqres.in`;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.URL}/api/users`)
      .pipe(
        pluck('data')
      );
  }

}
