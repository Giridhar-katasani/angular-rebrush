import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/model/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Employee_angular_application';
  isShow: boolean = true;
  isShowEnteredInput: boolean = true;
  enteredInput: string = "";
  userName: string = "Giridhar";

  constructor(private router: Router) { };

  ngOnInit() {
  }

  public getTitle(): string {
    return "from the method";
  }

  public clicked(): void {
    console.log("clicked");
    this.isShowEnteredInput=false;
  }

  navigateToCreateTask() {
    this.router.navigate(['/task-form']); // Navigate to the create-task route
  }

  public userInput(event:any): void {
    this.enteredInput = event.target.value;
    this.userName = event.target.value;
    console.log(event.target.value);
  }
}
