import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router: Router ) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClickSignIn() {
    this.router.navigate(['/productions'])
  }

}
