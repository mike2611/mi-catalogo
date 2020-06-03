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
  page : number;
  pageSize : number;
  displayProgressBar : boolean;
  
  constructor(config: NgbModalConfig, private modalService: NgbModal, private autoService: AutosService) 
  { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;
    this.displayProgressBar = true;
    this.autoService.getAutos().subscribe((response)=>{
      setTimeout(() => {
      this.displayProgressBar = false;
      this.autos = response.data;},500)
    })
  }
  onClick(content, auto: Automovil){
    this.modalService.open(content)
    
    this.autoMarca = "Marca: " + auto.marca;
    this.autoSubmarca = "Submarca: " + auto.submarca;
    this.autoModelo = "Modelos: " + auto.modelos;
    this.autoDescripcion = "Descripcion: " + auto.descripcion;
    
  }

}
