import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClearSearchService {

  private clearSubject = new Subject<any>();

  // Método para emitir um evento
  emitirEvento(valor?: any) {
    this.clearSubject.next(valor);
  }

  // Método para se inscrever e executar uma ação quando o evento é emitido
  onEventoExecutado() {
    return this.clearSubject.asObservable();
  }

}
