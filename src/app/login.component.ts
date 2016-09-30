import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { ChatAppService } from './chat-app.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
   userData : any;
   userAuthenticated : boolean;
   user : userConfigure;
  items: FirebaseListObservable<any[]>;
  constructor(private chatApp : ChatAppService , private af : AngularFire , private router: Router) {
     this.userAuthenticated = false;
        this.user = {
            email : "",
            password : ""
        } 
  
  }
     login(user){ 
    this.chatApp.login(user);
      }
  
    loginFacebook() {
  this.chatApp.loginFacebook();
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