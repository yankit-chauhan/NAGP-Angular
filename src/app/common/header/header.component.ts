import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private route: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (localStorage.getItem('TOKEN') !== null) {
      this.username = 'Log out | ' + localStorage.getItem('username');
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.clear();
    this._snackBar.open('Admin Portal', 'Successfully Logged out!', {
      duration: 5000,
    });
    this.isLoggedIn = false;
    this.route.navigate(['/dashboard']);
  }

  login() {
    this.route.navigate(['/login']);
  }

}
