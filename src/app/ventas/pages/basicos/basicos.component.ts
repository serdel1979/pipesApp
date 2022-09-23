import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLower: string = 'sergio';
  nombreUpper: string = 'SERGIO';
  nomobreCompleto: string = 'SERgio de LUca';

  fecha: Date = new Date();


}
