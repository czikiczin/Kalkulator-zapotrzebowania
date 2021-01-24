import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


/*interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}*/

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
   return this.http
     .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLF0PDsJnqWjb-DmvHdZIiXqOT84U6--c',
       {
         email: email,
         password: password,
         returnSecureToken: true
       }
    );
  }
}
