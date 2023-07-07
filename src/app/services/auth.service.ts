import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  user: any | undefined;
  app = initializeApp(environment.firebase);
  auth = getAuth(this.app);
  constructor(
    public router: Router,
  ) {
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(this.user));
    //   } else {
    //     localStorage.setItem('user', '');
    //   }
    // });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  SignUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        if(result){
          this.router.navigate(['/sign-in']) 
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  
  SignIn(email: string, password: string) {
    return signInWithEmailAndPassword( this.auth, email, password)
      .then((result) => { 
        if(result){
          this.router.navigate(['/productions']) 
        }
      })
      .catch((error) => { window.alert(error.message);
      });
  }
}