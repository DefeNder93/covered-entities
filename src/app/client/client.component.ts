import {Component, OnInit} from '@angular/core';
import {Api} from "../core/api.service";

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private api: Api) {
  }

  ngOnInit() {
  }

  public getCientsTest() {
    this.api.getClients().subscribe(r => {
      console.log('r', r);
    }, e => {
      console.log('e', e);
    });
  }
}
