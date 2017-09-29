import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PharmaciesComponent} from './pharmacies/pharmacies.component';
import {ContentComponent} from './content/content.component';
import {ClientComponent} from './client/client.component';

const routes: Routes = [
  {path: '', component: ContentComponent, children: [
    { path: '', component: ClientComponent },
    { path: 'pharmacies', component: PharmaciesComponent }
  ]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
