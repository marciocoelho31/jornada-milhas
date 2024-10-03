import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl('Executiva'),
      qAdultos: new FormControl(1),
      qCriancas: new FormControl(0),
      qBebes: new FormControl(0),
    });
  }

  getQtdAdultos(): number {
    return this.formBusca.get('qAdultos')?.value;
  }

  getQtdCriancas(): number {
    return this.formBusca.get('qCriancas')?.value;
  }

  getQtdBebes(): number {
    return this.formBusca.get('qBebes')?.value;
  }

  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formBusca.get('qAdultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }
    
    const criancas = this.formBusca.get('qCriancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }

    const bebes = this.formBusca.get('qBebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }

    return descricao;
  }

  alterarQuantidade(operacao: string, controle: string) {
    const formControl = this.buscaFormControl(controle);
    if (formControl) {
      const valorAtual = formControl.value;
      if (operacao === 'incrementar') {
        formControl.setValue(valorAtual + 1);
      } else if (operacao === 'decrementar' && valorAtual > 0) {
        formControl.setValue(valorAtual - 1);
      }
    }
  }

  buscaFormControl(formControlName: string) : FormControl | undefined {
    try{
      return this.formBusca.get(formControlName) as FormControl;
    } catch (error) {
      console.error(`Erro ao buscar ${formControlName} - ${error}`);
      return undefined;
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo: tipo
      });
      //console.log(this.formBusca.value);
    }
  }
}
