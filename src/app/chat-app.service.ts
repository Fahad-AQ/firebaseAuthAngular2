import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable ,AuthProviders,AuthMethods} from 'angularfire2';
@Injectable()
export class ChatAppService {
  userData : any
 Authenticated : boolean;
items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire,public router: Router) {
        this.userData = null;
       this.Authenticated = false;
        this.af.auth.subscribe(auth => console.log('hello ', auth));
        this.af.auth.subscribe(user => {
            if (user) {
                // user logged in
                this.userData = user;
                this.Authenticated = true;
        let link = ['/home' ,this.userData.uid];
        this.router.navigate(link);
                
            }
            else {
                // user not logged in
                this.userData = {};
                this.Authenticated = false;
        let link = ['/login'];
        this.router.navigate(link);
            }
        });
       this.items = af.database.list('/items');
       
   }
     signup(user) {
       let userObject :userCredential = {
      email : user.email,
      password : user.password    
    }
        this.af.auth.createUser(userObject).then(result => {
          console.log(result)
                 user = {
          email : "",
          username : "",
          password : ""
        }
         this.userData = result;
         this.Authenticated = true; 
        },error =>{
            alert('Some thing Wrong, Type again name , email and Password');   
              user = {
          email : "",
           username : "",
          password : ""
        }                
        })   
        
  }
   login(user) {
       let userObject :userCredential = {
      email : user.email,
      password : user.password    
    } 
  this.af.auth.login(userObject).then(result => {
          console.log(result)
                  user = {
          email : "",
          password : ""
        }        
         this.userData = result;
         this.Authenticated = true;
        },error =>{
            alert('Some thing Wrong,Type again email and Password');   
              user = {
          email : "",
          password : ""
        }                
        })   
        
    }

    loginFacebook() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        });
    }

    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        });
    }

    loginTwitter() {
        this.af.auth.login({
            provider: AuthProviders.Twitter,
            method: AuthMethods.Popup
        });
    }

    logout() {
        this.af.auth.logout();
    }
   getItem(){
     return this.items;
   }
}
interface userConfigure {
  email : string
  password : string
}
interface userCredential {
  email : string
  password : string
}