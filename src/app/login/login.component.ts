import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  name1: string;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  constructor(private _service: AuthService,private _route:Router) { }

  get loginControls() {
    return this.loginForm.controls;
  }

  ngOnInit() {

  }
  login() {
    console.log(this.loginForm.value)

    this._service.login(this.loginForm.value).subscribe({
      next:(data) => {
        this._route.navigate(["/dashboard"])
      },
      error:(err) => {
        console.log(err);
      }
    })
}

}
