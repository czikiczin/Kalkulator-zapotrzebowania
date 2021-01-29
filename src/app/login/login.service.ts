import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from './user.model';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import set = Reflect.set;


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

  user = new BehaviorSubject<User>(null);
  ID;
  private tokenExpTime: any;

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
       this.autoLogout(3600000);
       localStorage.setItem('userData', JSON.stringify(user));
     })
     );
}

 refreshLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData){
      return;
    }
    this.ID = userData.id;

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate));


    this.user.next(loadedUser);
    this.autoLogout(3600000);
 }

logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
    if (this.tokenExpTime) {
      clearTimeout(this.tokenExpTime);
    }
    this.tokenExpTime = null;
}

 autoLogout(expirationDuration: number) {

    this.tokenExpTime = setTimeout(() => {
      this.logout();
    }, expirationDuration);

}


}
