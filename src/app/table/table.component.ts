import { Component, OnInit, Input } from '@angular/core';
import {Automovil} from '../models';
import { AutosService } from '../services/autos.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { NgForm } from '@angular/forms';
import { AUTOMOVILES } from '../data';

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
    auto.modelos=[auto.modelos[0],auto.modelos[auto.modelos.length-1]];
    const modalRef = this.modalService.open(ModalAddUpdateComponent,{centered:true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{     
        this.autoService.updateAutos(auto).subscribe(response => console.log(response));     
      },
      (reason)=>{
        console.log(reason);
      }
    )
  }

  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent,{centered:true});
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (autoForm)=>{
        this.autoService.addAutos(autoForm).subscribe(response => console.log(response));         
      },
      (reason)=>{
        console.log(reason);
      }
    )

  }

  openModalEliminar(auto : Automovil){
    const modalRef = this.modalService.open(ModalDeleteComponent,{centered : true});
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp) => {
        this.autoService.deleteAutos(autoTemp).subscribe(response => {console.log(response)});
      },
      (reason) =>{
       console.log(reason);
      }

    )
  }



}
