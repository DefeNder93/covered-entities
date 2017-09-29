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
import {NavbarComponent} from './navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {ClientModalComponent} from './client/client-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    NavbarComponent,
    ClientModalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OAuthModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClientModalComponent]
})
export class AppModule { }
