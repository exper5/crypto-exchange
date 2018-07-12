import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    loggedIn = false;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    
                }

                return user;
            }));
    }


    getIsLoggedIn(){
        if(localStorage.getItem('currentUser')){
            console.log("User is logged in")
            return true;
        }else{
            return false;
        }

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        console.log('user logged out');
    }
}
