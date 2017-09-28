import {Http, Headers, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable()
export class Api {

  private host = 'https://centralapistaging.azurewebsites.net';

  constructor(private http: Http, private oauthService: OAuthService) {
  }

  getClients = () => {
    const headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
    const search = new URLSearchParams();
    return this.http.get(this.host + '/Clients', {headers, search}).map(this.extractData);
  };

  private extractData = (res) => res.json() || null;

}
