import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { TaskService } from './services/task.service';
import { SearchComponent } from './search/search.component';
import { BehaviouralSubjectService } from './services/behavioural.service';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';

// import { Routes } from '@angular/router';
// import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    TaskFormComponent,
    TaskListComponent,
    HeaderComponent,
    FilterComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TaskService, BehaviouralSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
