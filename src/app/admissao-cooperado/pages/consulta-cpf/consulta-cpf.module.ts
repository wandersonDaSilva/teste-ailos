import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

import { StepsModule } from '../components/steps/steps.module';
import { InfoCooperadoModule } from '../info-cooperado/info-cooperado.module';
import { ConsultaCpfComponent } from './consulta-cpf.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    InfoCooperadoModule,
    StepsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [ConsultaCpfComponent],
  exports: [ConsultaCpfComponent]
})
export class ConsultaCpfModule { }
