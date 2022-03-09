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
    return this.http.get(`${this.URL}/api/users?per_page=6&delay=3`)
      .pipe(
        pluck('data')
      );
  }

  getUserById( id: string ) {
    return this.http.get(`${this.URL}/api/users/${id}`)
      .pipe(
        pluck('data')
      );
  }

}
