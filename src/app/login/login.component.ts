import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationService } from '../services/registeration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private regService: RegisterationService
  ) {
  }

  ngOnInit(): void {
  }

  async login() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      // console.log(formData);
      let username = formData.username || '';
      let password = formData.password  || '';
      if(username != "" && password != '') {
        await this.regService.loginUser(username, password);
      }
      // Perform further actions with formData
      
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
