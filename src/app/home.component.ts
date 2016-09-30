import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ChatAppService } from './chat-app.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  userLoginId : string;
  items: FirebaseListObservable<any[]>;
  constructor( public route: ActivatedRoute,
  public chatAppServices: ChatAppService,public af: AngularFire) {
    this.items = chatAppServices.getItem();
    this.route.params.forEach((params: Params) => {
       let id = params['id']; // (+) converts string 'id' to a number
     this.userLoginId  = id;     
     });
  }
  
 logout(){
       this.chatAppServices.logout();
 }
}