import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AsyncValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  })


  get email() {
    return this.loginGroup.get('email') as FormControl
  }

  get password() {
    return this.loginGroup.get('password') as FormControl
  }


  logIn() {
    const { email, password } = this.loginGroup.value
    this.authService.signIn(email, password)
  }

  logInAsGuest() {
    this.authService.signInAsGuest()
  }

  ngOnInit(): void {
  }

}
