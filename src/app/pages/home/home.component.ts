import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Depoimento, Promocao } from '../../core/types/types';
import { DepoimentoService } from '../../core/services/depoimento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  promocoes: Promocao[] = [];
  depoimentos: Depoimento[] = [];

  constructor(
    private servicoPromocao: PromocaoService,
    private servicoDepoimento: DepoimentoService
  ) { 
    
  }

  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe(res => {
      this.promocoes = res;
    });
    this.servicoDepoimento.listar().subscribe(res => {
      this.depoimentos = res;
    });
  }

}
