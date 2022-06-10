import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'User Registiration';
  public userDOB: number;
  public userDOBAge: string;
  public userAge: string;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  onDboChange(userDOB: Date) {
    this.userDOBAge = '';
    const bdate = new Date(userDOB);
    let timeDiff = Math.abs(Date.now() - bdate.getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    if (age < 21) {
      this.userDOBAge = 'User is younger than 21 years old';
    }
  }

  onSubmit(data) {
    console.log(data);
  }
}
