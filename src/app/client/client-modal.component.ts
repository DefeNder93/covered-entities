import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ClientModalConfirmComponent} from "./client-modal-confirm.component";
@Component({
  selector: 'app-client-modal-content',
  templateUrl: 'client-modal.component.html'
})
export class ClientModalComponent {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  save() {
    this.activeModal.close();
    alert('Saved');
  }

  cancel() {
    this.modalService.open(ClientModalConfirmComponent).result.then((result) => {
      // do nothing
    }, (reason) => {
      this.activeModal.dismiss();
    });
  }
}
