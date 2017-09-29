import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = <AuthConfig>{

  // Url of the Identity Provider
  // issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  issuer: 'https://auth340bpreprod.azurewebsites.net',

  // URL of the SPA to redirect the user to after login
  redirectUri: 'http://localhost:4200',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'central',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'central-api openid',

  responseType: 'id_token token',

  userinfoEndpoint: 'https://auth340bpreprod.azurewebsites.net/connect/userinfo'
};
