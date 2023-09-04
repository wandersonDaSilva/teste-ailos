import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DataCooperadoModel } from '../../../../models/data-cooperado.model';

@Component({
  selector: 'app-info-cooperado-dialog',
  templateUrl: './info-cooperado-dialog.component.html',
  styleUrls: ['./info-cooperado-dialog.component.css']
})
export class InfoCooperadoDialogComponent implements OnInit {

  public dataCooperado = new DataCooperadoModel();

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataCoop: DataCooperadoModel,
  ) { }

  ngOnInit() {
    this.dataCooperado = this.dataCoop;
  }

}
