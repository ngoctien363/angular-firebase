import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any | undefined;
  app = initializeApp(environment.firebase);
  auth = getAuth(this.app);
  token: string | any;
  isLoggedIn = false;
   // Header
   private headers = new HttpHeaders();
  constructor(
    public router: Router,
  ) {
    
    let user = JSON.parse(localStorage.getItem('user')!);
    if(user){ 
      this.isLoggedIn = true; 
      this.token = user.stsTokenManager.accessToken;
      this.headers = this.headers.set('X-AUTH-TOKEN', user.accessToken);
    }
    this.headers = this.headers.append('Content-Type', 'application/json');
  }
  
  refresh(): void {
    window.location.reload();
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
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(result.user));
          this.router.navigate(['productions'])
        }
      })
      .catch((error) => { window.alert(error.message);
      });
  }

  SignOut() {
    return signOut(this.auth).then(() => {
      this.isLoggedIn = false;
      this.token      = undefined;
      localStorage.removeItem('user');
      localStorage.removeItem('isAdmin');
      this.refresh();
    });
  }
}