import { Injectable } from '@angular/core';
import { IUser } from '../model/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

/** This is a User service. */
export class UserService {

    private apiUrl: string = "https://json-db-server-board.herokuapp.com/users";
    private users: IUser[];

    constructor(private http: HttpClient) {
        this.getUsers().subscribe(users => {
            this.users = users;
        })
    }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.apiUrl);
    }

    validateUser(user: IUser): boolean {
        let isValid: boolean = false;
        if (this.users.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase() && user.password === usr.password) > -1) {
            isValid = true;
        }
        return isValid;
    }
}