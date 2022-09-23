import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import localeEs from '@angular/common/locales/es-AR';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    VentasModule,
    BrowserModule,
    AppRouterModule,
    SharedModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
