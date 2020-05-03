import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class LoginCanActivateGuard implements CanActivate {
    constructor(private route: Router, private _snackBar: MatSnackBar) { }
    canActivate(): boolean {
        if (localStorage.getItem('TOKEN') != null) {
            this.route.navigate(['/admindashboard']);
            this._snackBar.open('Admin Portal', 'Already Logged In!', {
                duration: 4000,
            });
            return false;
        }
        return true;
    }
}