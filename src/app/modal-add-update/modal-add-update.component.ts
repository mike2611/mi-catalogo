import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent {

  accion: string;
  public auto: Automovil = {
    _id: '',
    marca : '',
    submarca: '',
    modelos:[],
    descripcion: ''

  }
  


  constructor(public activeModal: NgbActiveModal) { 
   
  }


  
}
