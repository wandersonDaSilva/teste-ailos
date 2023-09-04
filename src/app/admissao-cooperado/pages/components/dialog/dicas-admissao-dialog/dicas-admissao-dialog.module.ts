import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

import { DicasAdmissaoDialogComponent } from './dicas-admissao-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [DicasAdmissaoDialogComponent]
})
export class DicasAdmissaoDialogModule { }
