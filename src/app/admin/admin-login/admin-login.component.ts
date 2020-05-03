import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/model/IUser';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  pageTitle: string = "Admin Login";
  loginForm: FormGroup;
  hide = true;
  constructor(public fb: FormBuilder, private route: Router, private userService: UserService, private _snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getUsernameErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'Please enter username.' : '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? 'Please enter password.' : '';
  }

  ngOnInit(): void {
  }

  login(form: IUser) {
    if (this.userService.validateUser(form)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('username', form.username);
      this.route.navigate(['/admindashboard']);

      this._snackBar.open('Admin Portal', 'Logged in successfully!', {
        duration: 4000,
      });
    } else {
      this._snackBar.open('Admin Portal', 'Please enter valid credentials!', {
        duration: 4000,
      });
    }
  }

}
