import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import {Automovil} from '../models';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListComponent implements OnInit {

  autos: Automovil[];
  autoMarca: String;
  autoModelo: String;
  autoFecha: String;
  constructor(config: NgbModalConfig, private modalService: NgbModal) 
  { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  onClick(content, auto: Automovil){
    this.modalService.open(content)
    
    this.autoMarca = "Marca: " + auto.marca;
    this.autoModelo = "Modelo: " + auto.modelo;
    this.autoFecha = "Fecha de Registro: " + auto.fecha_registro.getDay().toString()+"/"+auto.fecha_registro.getMonth().toString() + "/" + auto.fecha_registro.getFullYear().toString();
    
  }

}
