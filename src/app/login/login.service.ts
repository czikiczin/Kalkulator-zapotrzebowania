import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {User} from './user.model';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';


export interface LoginResponse {
 kind: string;
 idToken: string;
 email: string;
 refreshToken: string;
 expiresIn: string;
 localId: string;
 registered?: boolean;
}

@Injectable({ providedIn: 'root' })

export class LoginService {

  user = new Subject<User>();
  ID;

  constructor(private http: HttpClient, private router: Router ) {
  }

  singin(email: string, password: string) {
   return this.http.post<LoginResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLF0PDsJnqWjb-DmvHdZIiXqOT84U6--c',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
   )
     .pipe(tap(resData => {
       this.ID = resData.localId;
       const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
       const user = new User(
         resData.email,
         resData.localId,
         resData.idToken,
         expirationDate,
       );
       this.user.next(user);
     })
     );
}

logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
}


}
