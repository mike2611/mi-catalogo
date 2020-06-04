import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';
import { RangoModelosDirective } from '../directives/rango-modelos.directive';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { Button } from 'protractor';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent {

  accion: string;
  auto : Automovil
  
  constructor(public activeModal: NgbActiveModal) { 
         
    this.auto = {
      _id: '',
      marca : '',
      submarca: '',
      modelos:[2000, 2000],
      descripcion: ''
  
    }

  }

  onSubmit(){
    if(this.auto.modelos[0]>this.auto.modelos[this.auto.modelos.length - 1]){
     window.alert("El primer valor no puede ser mayor al segundo");
    }
    else{
    this.activeModal.close(this.auto);
    }
  }


  
}
