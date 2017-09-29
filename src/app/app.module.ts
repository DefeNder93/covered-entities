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
import {PharmaciesComponent} from './pharmacies/pharmacies.component';
import {ContentComponent} from './content/content.component';
import {ClientModalConfirmComponent} from './client/client-modal-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    NavbarComponent,
    ClientModalComponent,
    PharmaciesComponent,
    ContentComponent,
    ClientModalConfirmComponent
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
  entryComponents: [ClientModalComponent, ClientModalConfirmComponent]
})
export class AppModule { }
