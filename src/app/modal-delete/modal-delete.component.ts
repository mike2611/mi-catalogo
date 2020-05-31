import { Component, OnInit } from '@angular/core';
import {Automovil} from 'src/app/models'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent{

  auto: Automovil = {} as Automovil;


  constructor(public activeModal: NgbActiveModal) {  }


}
