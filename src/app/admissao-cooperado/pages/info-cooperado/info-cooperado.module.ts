import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

import { InfoCooperadoComponent } from './info-cooperado.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [InfoCooperadoComponent],
  exports: [InfoCooperadoComponent]
})
export class InfoCooperadoModule { }
