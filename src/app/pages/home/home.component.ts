import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private modalService : NgbModal) {}

  openRegisterModal(content : any) {
		this.modalService.open(content, { centered: true });
	}
  openLoginModal(content : any) {
		this.modalService.open(content, { centered: true });
	}

}
