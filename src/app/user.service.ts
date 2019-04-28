import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  apiUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getallUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

}