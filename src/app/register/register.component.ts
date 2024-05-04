import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterationService } from '../services/registeration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: any = {}; // Object to store form data

  constructor(private router:Router, private regService: RegisterationService) {}

  register() {
    // Access form data from registerForm object
    const formData = this.registerForm;
    console.log(formData);
    // this.regService.registerUser()
    this.regService.registerUser(formData);
    if(localStorage.getItem('jwtToken') != null) {
      this.router.navigate(['/task-form']);
    }
    // Perform further actions with formData (e.g., send it to backend)
  }
}
