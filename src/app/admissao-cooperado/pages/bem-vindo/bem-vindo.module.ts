import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BemVindoComponent } from './bem-vindo.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  declarations: [BemVindoComponent]
})
export class BemVindoModule { }
