import { Component, OnInit } from '@angular/core';
import {Automovil} from '../models';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../services/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListComponent implements OnInit {

  autos: Automovil[];
  autoSubmarca: String;
  autoModelo: String;
  autoDescripcion: String;
  autoMarca: String;
  constructor(config: NgbModalConfig, private modalService: NgbModal, private autoService: AutosService) 
  { }

  ngOnInit(): void {

    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;})

  }

  onClick(content, auto: Automovil){
    this.modalService.open(content)
    
    this.autoMarca = "Marca: " + auto.marca;
    this.autoSubmarca = "Submarca: " + auto.submarca;
    this.autoModelo = "Modelos: " + auto.modelos;
    this.autoDescripcion = "Descripcion: " + auto.descripcion;
    
  }

}
