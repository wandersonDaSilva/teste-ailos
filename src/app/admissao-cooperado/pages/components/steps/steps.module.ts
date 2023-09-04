import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

import { StepsComponent } from './steps.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [StepsComponent],
  exports: [StepsComponent]
})
export class StepsModule { }
