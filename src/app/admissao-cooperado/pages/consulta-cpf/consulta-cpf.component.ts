import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Utils } from '../../utils/utils';
import { Router } from '@angular/router';
import { ClearSearchService } from '../../services/clear-search.service';
import { LoadingComponent } from '../components/loading/loading.component';
import { LoadingService } from '../../services/loading.service';


@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.css']
})
export class ConsultaCpfComponent implements OnInit {

  public formGroup!: FormGroup;
  public showInfoCooperador: boolean = false;
  public showMessageError: boolean = false;
  public utils = new Utils();

  constructor(
    private loadingService: LoadingService,
    private clearSearchService: ClearSearchService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.showLoading();
    this.createForm();
    this.clearSearchService.onEventoExecutado().subscribe(
      (resp) => {
        if(!resp) this.resetSearch();
      }
    );
  }

  ngAfterViewInit() {
    this.loadingService.hide();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      cpf: [null],
    })
  }

  searchCpf() {
    this.showLoading();
    if (!this.utils.isValidCPF(this.cpfControl?.value)) {
      this.cpfControl?.markAsTouched();
      this.cpfControl?.setErrors({'incorrect': true});
      this.showMessageError = !this.showMessageError;
      this.hideLoading();
      return;
    }

    this.showMessageError = false;
    this.showInfoCooperador = true;
    this.cpfControl?.disable();
    this.clearSearchService.emitirEvento(true);
    this.goToInfo();

  }

  goToInfo() {
    this.router.navigate(['page/consulta/cpf', this.cpfControl?.value]);
  }

  resetSearch() {
    this.formGroup.reset();
    this.formGroup.updateValueAndValidity();
    this.cpfControl?.enable();
    this.showInfoCooperador = !this.showInfoCooperador;
  }

  showLoading() {
    this.loadingService.show();
  }

  hideLoading() {
    this.loadingService.hide();
  }

  get cpfControl() {
    return this.formGroup.get('cpf');
  }
}
