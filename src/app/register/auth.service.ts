import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  error = null;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
   return this.http
     .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLF0PDsJnqWjb-DmvHdZIiXqOT84U6--c',
       {
         email: email,
         password: password,
         returnSecureToken: true
       }
    )
     .pipe(catchError(errorRes => {
       let errorMessage = 'Wystąpił nieznany błąd';
       if(!errorRes.error || !errorRes.error.error){
         return throwError(errorMessage);
       }
       switch (errorRes.error.error.message) {
         case 'EMAIL_EXISTS' :
         errorMessage = 'Użytkownik z podanym adresem e-mail juz istnieje';
       }
       return throwError(errorMessage);
     }));
  }
}

