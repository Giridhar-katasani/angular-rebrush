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
import { RouterModule, Routes } from '@angular/router';
// import { Routes } from '@angular/router';
// import { MatIconModule } from '@angular/material';

const routers: Routes = [
  {path:'', component: TaskListComponent},
  {path:'task-form', component: TaskFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    TaskFormComponent,
    TaskListComponent,
    HeaderComponent,
    FilterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routers),
  ],
  providers: [TaskService, BehaviouralSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
