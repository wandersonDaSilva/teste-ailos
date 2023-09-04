import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
