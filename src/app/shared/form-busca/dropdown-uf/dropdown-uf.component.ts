import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../../core/types/types';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss'
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  myControl = new FormControl('');

  filteredOptions!: Observable<string[]>;

  unidadesFederativas: UnidadeFederativa[] = [];

  constructor(private unidadeFederativaService: UnidadeFederativaService) {

  }

  ngOnInit(): void {
    this.unidadeFederativaService.listar()
      .subscribe((dados) => {
        this.unidadesFederativas = dados;
      });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );      
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.unidadesFederativas
      .filter(option => option.sigla.toLowerCase().includes(filterValue))
      .map(option => option.sigla + ' - ' + option.nome);
  }  
}
