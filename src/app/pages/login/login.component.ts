import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormField,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  typePassword: string = 'password';

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router
  ){

  }

  onSubmitLogin(): void {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.router.navigate(['/']);
    }
  }

  viewPassord(): void {
    this.typePassword = this.typePassword == 'password' ? 'text' : 'password';
  }
}
