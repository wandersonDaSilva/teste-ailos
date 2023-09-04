import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Formate o CPF com a máscara
    const cpfFormatted = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    return cpfFormatted;
  }

}
