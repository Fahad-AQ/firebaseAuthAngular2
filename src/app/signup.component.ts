import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { ChatAppService } from './chat-app.service';
@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent {
    userData : any;
   userAuthenticated : boolean;
  user : userConfigure;
  items: FirebaseListObservable<any[]>;
  constructor(public chatApp : ChatAppService , public af : AngularFire , public router: Router) {
        this.user = {
          email : "",
          username : "",
          password : ""
        }
    this.items = chatApp.getItem();
  }

 signup(user){ 
    this.chatApp.signup(user);
      }

}
interface userConfigure {
  email : string
  username : string
  password : string
}
interface userCredential {
  email : string
  password : string
}