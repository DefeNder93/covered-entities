import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-client-modal-confirm-content',
  templateUrl: 'client-modal-confirm.component.html'
})
export class ClientModalConfirmComponent {
  @Input() name;

  ok() {
    this.activeModal.close();
  }

  cancel() {
    this.activeModal.close();
  }

  constructor(public activeModal: NgbActiveModal) {}
}
