import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {


  tog:boolean = false;
  case: string = 'A mayúsculas'


  constructor() { }

  ngOnInit(): void {
    !this.tog? this.case = 'A mayúsculas' : this.case = 'A minúsculas'
  }

  toggle(){
    this.tog = !this.tog;  
    !this.tog? this.case = 'A mayúsculas' : this.case = 'A minúsculas'
  }

}
