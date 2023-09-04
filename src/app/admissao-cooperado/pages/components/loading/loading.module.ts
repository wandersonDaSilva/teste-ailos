import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule { }
