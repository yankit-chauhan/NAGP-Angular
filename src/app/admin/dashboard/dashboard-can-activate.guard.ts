import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class DashboardCanActivateGuard implements CanActivate {
    constructor(private route: Router, private _snackBar: MatSnackBar) { }
    canActivate(): boolean {
        if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
            this.route.navigate(['/login']);
            this._snackBar.open('Admin Portal', 'Please login to continue!', {
                duration: 4000,
            });
            return false;
        }
        return true;
    }
}