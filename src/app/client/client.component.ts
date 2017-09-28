import {Component, OnInit} from '@angular/core';
import {Api} from '../core/api.service';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private api: Api) {}

  clients = [];
  currentPage = 1;
  itemsPerPage = 10;

  ngOnInit() {
    this.getCients();
  }

  public getCients() {
    this.api.getClients().subscribe(r => {
      this.clients = r.value;
    }, e => {
      console.log('e', e);
    });
  }
}
