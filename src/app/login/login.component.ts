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

  login() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      // console.log(formData);
      let username = formData.username || '';
      let password = formData.password  || '';
      if(username != "" && password != '') {
        this.regService.loginUser(username, password);
      }
      if(localStorage.getItem('jwtToken')) {
        this.navitageToTaskList();
      }
      // Perform further actions with formData
      
    }
  }

  navitageToTaskList() {
    this.router.navigate(['/task-list']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
