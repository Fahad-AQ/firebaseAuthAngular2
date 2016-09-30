import { ModuleWithProviders } from '@angular/core';
import { Route,RouterModule,CanActivate  } from '@angular/router';
import { ChatAppService } from './chat-app.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { HomeComponent } from './home.component';
const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
   { path : 'home', component :HomeComponent },
  { path : 'login', component : LoginComponent},
    { path : 'signup', component : SignupComponent},
    { path : 'home/:id', component : HomeComponent},
  { path: '**', component: HomeComponent },
    
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);