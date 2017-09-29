import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-client-modal-content',
  templateUrl: 'client-modal.component.html'
})
export class ClientModalComponent {
  @Input() name;

  save() {
    this.activeModal.close();
    alert('Saved');
  }

  constructor(public activeModal: NgbActiveModal) {}
}
