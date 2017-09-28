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
  initialClients = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchQuery = '';

  ngOnInit() {
    this.getCients();
  }

  search() {
    this.clients = !this.searchQuery ? this.initialClients : this.initialClients.filter(c => c.ClientName.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1);
  }

  public getCients() {
    this.api.getClients().subscribe(r => {
      this.clients = r.value;
      this.initialClients = r.value;
    }, e => {
      console.log('e', e);
    });
  }
}
