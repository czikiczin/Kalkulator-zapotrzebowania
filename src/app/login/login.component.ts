import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.loginService.singin(email, password).subscribe(resData =>
      {
        console.log(resData);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      });
    form.reset();
  }
}
