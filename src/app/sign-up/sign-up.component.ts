import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor( 
    private router: Router,
    public auth: AuthService
  ) {}
  onChangeSignIn() {
    this.router.navigate(['/sign-in'])
  }
}
