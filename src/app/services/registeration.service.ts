import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  constructor(private http: HttpClient) { }

  // register user
    registerUser(user: User) {
      console.log('register');
      // http://localhost:9090/auth/register
      return this.http.post('http://localhost:9090/auth/register', user).subscribe((res:any) => { 
        if (res?.token) {
          localStorage.setItem('jwtToken', res?.token);
        } else {
          console.error('Token not found in response');
        }
      })
    }

    // login user
    loginUser(username: string, password: string) {
      return this.http.post('http://localhost:9090/auth/login', {
        username: username,
        password: password
      }).subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('jwtToken', res?.token);
      });
    }

    // logout user
    logoutUser() {
      return this.http.get('http://localhost:8080/logout');
    }

    // get user details
    getUserDetails() {
      return this.http.get('http://localhost:8080/user');
    }

    // update user details
  // login user
}


interface User {
  userName: string;
  first_name: string;
  last_name: string;
  password: string;
}

interface Token {
response: string;
}