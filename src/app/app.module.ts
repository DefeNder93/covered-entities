import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login/login.component';
import {ClientComponent} from './client/client.component';
import {AppRoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OAuthModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
