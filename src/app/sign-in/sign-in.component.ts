import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface SigIn {
  Username: string;
  Password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  public modelLogin: SigIn = {
    Username: '',
    Password: ''
}

public isLoading: boolean = false;
public errorMess: string = ''

  constructor( 
    private router: Router,
    public auth: AuthService,
  ) {

  }
  ngOnInit(): void {}

  onClickSignIn(acc: string, pass: string) {
    this.auth.SignIn(acc, pass).then(() => {
      localStorage.setItem('isAdmin', 'true')
      this.router.navigate(['dashboard']);
      this.isLoading = false;
    });
  }

  onChangeSignUp() {
    this.router.navigate(['/sign-up'])
  }

}
