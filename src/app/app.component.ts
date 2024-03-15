import { Component } from '@angular/core';

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

  constructor() { };

  ngOnInit() {
  }

  public getTitle(): string {
    return "from the method";
  }

  public clicked(): void {
    console.log("clicked");
    this.isShowEnteredInput=false;
  }

  public userInput(event:any): void {
    this.enteredInput = event.target.value;
    this.userName = event.target.value;
    console.log(event.target.value);
  }
}
