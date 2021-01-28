import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string = null;
  isLoading = false;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    this.loginService.singin(email, password).subscribe(resData =>
      {
        this.isLoading = false;
        console.log(resData);
        this.router.navigate(['/']);
      },
      error => {
        this.isLoading = false;
        switch (error.error.error.message) {
          case 'EMAIL_NOT_FOUND' :
            this.errorMessage = 'Użytkownik z podanym mailem nie istnieje';
            break;
          case 'INVALID_PASSWORD' :
            this.errorMessage = 'Nieprawidłowe hasło';
            break;
        }
        return throwError(this.errorMessage);
      });
    form.reset();
  }
}
