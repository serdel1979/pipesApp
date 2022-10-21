import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {



  heroes: Heroe[] = [{
    nombre: 'Superman',
    vuela: true,
    color: Color.rojo
  }, {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  }, {
    nombre: 'Robin',
    vuela: false,
    color: Color.rojo
  },{
    nombre: 'Linterna Verde',
    vuela: false,
    color: Color.verde
  }]

  tog: boolean = false;
  case: string = 'A mayúsculas'


  constructor() { }

  ngOnInit(): void {
    !this.tog ? this.case = 'A mayúsculas' : this.case = 'A minúsculas';
  }

  toggle() {
    this.tog = !this.tog;
    !this.tog ? this.case = 'A mayúsculas' : this.case = 'A minúsculas'
  }

}
