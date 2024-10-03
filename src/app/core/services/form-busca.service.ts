import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor() {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),

    });
  }

  buscaFormControl(formControlName: string) : FormControl | undefined {
    try{
      return this.formBusca.get(formControlName) as FormControl;
    } catch (error) {
      console.error(`Erro ao buscar ${formControlName} - ${error}`);
      return undefined;
    }
  }
}
