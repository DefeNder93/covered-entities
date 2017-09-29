import {Component, OnInit} from '@angular/core';
import {Api} from '../core/api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';
import {ClientModalComponent} from './client-modal.component';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private api: Api, private modalService: NgbModal, private router: Router, private oauthService: OAuthService) {}

  clients = [];
  initialClients = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchQuery = '';
  closeResult: string;

  sorting = {
    active: 'ClientName',
    reverse: false
  };

  ngOnInit() {
    this.oauthService.loadDiscoveryDocument().then(r => {
      this.getCients();
    });
  }

  sort() {
    this.clients = this.clients.sort((a, b) => this.sorting.reverse ? this.compare(b[this.sorting.active], a[this.sorting.active])
        : this.compare(a[this.sorting.active], b[this.sorting.active]));
  }

  compare(a, b) {
    if (!a) {
      return 1;
    }
    if (!b) {
      return -1;
    }
    if (a.localeCompare) {
      return a.localeCompare(b);
    }
    return a > b ? 1 : -1;
  }

  showSortingControl(name, reverse) {
    return this.sorting.active === name && this.sorting.reverse === reverse;
  }

  setSorting(name, reverse) {
    this.sorting.active = name;
    this.sorting.reverse = reverse;
  }

  getInitialSorting(active) {
    return this.sorting.active === active ? !this.sorting.reverse : false;
  }

  search() {
    this.clients = !this.searchQuery ? this.initialClients : this.initialClients.filter(c =>
      c.ClientName.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1);
  }

  open(client) {
    const modalRef = this.modalService.open(ClientModalComponent);
    modalRef.componentInstance.name = client.ClientName;
    modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

  public getCients() {
    this.api.getClients().subscribe(r => {
      this.clients = r.value;
      this.initialClients = r.value;
      this.sort();
    }, r => {
      console.log(r.json().error.message);
      if (r.status === 401) {
        this.router.navigateByUrl('/login');
        return;
      }
      alert('Error: ' + r.json().error.message);
    });
  }
}
