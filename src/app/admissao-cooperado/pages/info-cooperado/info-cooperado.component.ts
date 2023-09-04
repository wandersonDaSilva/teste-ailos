import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DialogService } from '../../services/dialog.service';
import { Utils } from '../../utils/utils';
import { DATA } from './info-cooperado-data';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-info-cooperado',
  templateUrl: './info-cooperado.component.html',
  styleUrls: ['./info-cooperado.component.css']
})
export class InfoCooperadoComponent implements OnInit {

  public utils = new Utils();
  public accountNumberAplicacao!: string;
  public accountNumberCorrente!: string;
  public dataCooperado = DATA;

  @Input() cpf!: string;

  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {
     this.route.params.subscribe(params => {
      this.cpf = params['id'];
   });
  }

  ngOnInit() {
    this.loadingService.show();
    this.dataCooperado.cpf = this.cpf;
    this.accountNumberAplicacao = this.accountNumber;
    this.accountNumberCorrente = this.accountNumber;
  }

  ngAfterViewInit() {
    this.loadingService.hide();
  }

  openDialog() {
    this.dialogService.infoCooperado(this.dataCooperado);
  }

  get accountNumber() {
    return this.utils.generateRandomAccount();
  }
}
