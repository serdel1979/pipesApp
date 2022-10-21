import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';

import { SplitButtonModule } from 'primeng/splitbutton';

import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  exports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    SplitButtonModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
