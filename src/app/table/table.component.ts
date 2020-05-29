import { Component, OnInit, Input } from '@angular/core';
import {Automovil} from '../models';
import { AutosService } from '../services/autos.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
}) 



export class TableComponent implements OnInit {

  autos: Automovil[];
  page = 1;
  pageSize = 10;

 

  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;})

  }

  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent,{centered:true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';
  }

  openModalNuevo(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent,{centered:true});
    modalRef.componentInstance.auto = "";
    modalRef.componentInstance.accion = 'Nuevo';
  }

}
