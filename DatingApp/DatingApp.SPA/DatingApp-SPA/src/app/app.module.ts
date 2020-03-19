import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListsComponent,
    RegisterComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/auth']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
