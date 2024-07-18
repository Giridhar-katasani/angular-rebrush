import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor() {

    }

    setToken(token: string) {
        localStorage.setItem('jwtToken', token);
    }

    getToken() { 
        return localStorage.getItem('jwtToken');
    }
    
    isAuthenticated() {
        const token = this.getToken();
        return token !== null;
    }

    logout(): void {
        console.log('Before removal:', localStorage.getItem('jwtToken'));
        localStorage.removeItem('jwtToken');
        console.log('after removal:', localStorage.getItem('jwtToken'));
    }
}