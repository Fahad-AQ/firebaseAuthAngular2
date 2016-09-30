import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { HomeComponent } from './home.component';
import { ChatAppService } from './chat-app.service';
import { routing } from './app.routing';
import { AngularFireModule,firebaseAuthConfig,AuthProviders,AuthMethods} from 'angularfire2';
import { FormsModule  }   from '@angular/forms';
// Must export the config
export const firebaseConfig = {
   apiKey: "AIzaSyCdVqso33grD-E_RuhjPsAqdk_uZFLvHJo",
    authDomain: "login-authentication-c0579.firebaseapp.com",
    databaseURL: "https://login-authentication-c0579.firebaseio.com",
    storageBucket: "login-authentication.appspot.com",
    messagingSenderId: "1288007795"
};
export const myfirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
};
@NgModule({
  imports: [
    BrowserModule,
      FormsModule,
    AngularFireModule.initializeApp(firebaseConfig,myfirebaseAuthConfig),
    routing
  ],
  providers : [ChatAppService],
  declarations: [AppComponent,LoginComponent,SignupComponent,HomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}