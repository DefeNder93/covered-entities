import {Component, OnInit} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
  }

  public logout() {
    this.oauthService.logOut();
  }

  public isLoggedIn() {
    return !!this.oauthService.getAccessToken();
  }

  ngOnInit() {
  }
}
