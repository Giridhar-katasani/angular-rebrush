import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService) { }

  // register user
    registerUser(user: User) {
      console.log('register');
      // http://localhost:9090/auth/register
      return this.http.post('http://localhost:9090/auth/register', user).subscribe( {
        next: (res:any) => { 
        if (res?.token) {
          this.authService.setToken(res.token);
          if(localStorage.getItem('jwtToken')) {
            this.router.navigate(['/task-form']);
          }
        } 
      }, 
        error: (err) => {
          console.log(err.message);
        }
    })
    }

    // login user
    async loginUser(username: string, password: string) {
      return this.http.post('http://localhost:9090/auth/login', {
        username: username,
        password: password
      }).subscribe({
        next: (res:any) => {
        console.log(res);
        this.authService.setToken(res.token);
        if(localStorage.getItem('jwtToken')) {
          this.router.navigate(['/task-list']);
        }
      }, 
        error: (err) => {
        console.log(err.message);
      }
    });
    }

    // logout user
    logoutUser() {
      this.authService.logout();
      // return this.http.get('http://localhost:8080/logout');
    }

    // get user details
    getUserDetails() {
      return this.http.get('http://localhost:8080/user');
    }
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