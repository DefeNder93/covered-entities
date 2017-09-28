import {Component, OnInit} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private oauthService: OAuthService, private router: Router) {
  }

  public logout() {
    this.oauthService.logOut(true);
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn() {
    return !!this.oauthService.getAccessToken();
  }

  ngOnInit() {
  }
}
