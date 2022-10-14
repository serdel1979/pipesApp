import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {




  nombre: string = 'Sergio';
  genero: string = 'masculino';
  toggle: boolean = false;

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }


  clientes: string[] = ['Juan','Felipe','Sandro','Jacinto','Pedro'];
  clientesMapa = {
    '=0' : 'no hay nadie esperando',
    '=1' : 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando '
  }


  cambiarPersona(){
    if(!this.toggle){
      this.nombre = 'Mariana';
      this.genero = 'femenino';
    }else{
      this.nombre = 'Sergio';
      this.genero = 'masculino';
    }    
    this.toggle = !this.toggle;
  }

  borrarPersona(){
    this.clientes.pop();    
  }


  persona = {
    nombre: 'Sergio',
    edad: 35,
    direccion: '27, Berisso'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Goku',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: false
    }
  ]


  //async pipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
      resolve('Hay data');
    },3500);
    
  });


}
