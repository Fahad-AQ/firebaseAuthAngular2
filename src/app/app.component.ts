import { Component } from '@angular/core';
import { RouterStateSnapshot,ActivatedRouteSnapshot,Router } from '@angular/router';
import { ChatAppService } from './chat-app.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent  {
  loadingCondition : boolean;
  title : string;
  constructor(public router: Router,public chatAppServices : ChatAppService) {
    this.loadingCondition = false;
    this.title = 'Angular 2 Firebase Web App';
  Observable.interval(2000)
          .take(10).map((x) => x+1)
          .subscribe((x) => {
         this.loadingCondition= true;
          })
  }
 
}